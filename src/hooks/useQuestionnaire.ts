"use client";
import { useReducer } from "react";
import { QuestionnaireAnswers, GenerateResponse } from "@/lib/types";

export interface QuestionnaireState {
  step: number;
  size: QuestionnaireAnswers["size"] | null;
  sun: QuestionnaireAnswers["sun"] | null;
  styles: string[];
  edible: QuestionnaireAnswers["edible"] | null;
  maintenance: QuestionnaireAnswers["maintenance"] | null;
  photoBase64: string | null;
  photoMimeType: string | null;
  contactName: string;
  contactPhone: string;
  result: GenerateResponse | null;
  loading: boolean;
  error: string | null;
}

type Action =
  | { type: "SET_SIZE"; value: QuestionnaireAnswers["size"] }
  | { type: "SET_SUN"; value: QuestionnaireAnswers["sun"] }
  | { type: "SET_STYLES"; value: string[] }
  | { type: "SET_EDIBLE"; value: QuestionnaireAnswers["edible"] }
  | { type: "SET_MAINTENANCE"; value: QuestionnaireAnswers["maintenance"] }
  | { type: "SET_PHOTO"; base64: string; mimeType: string }
  | { type: "CLEAR_PHOTO" }
  | { type: "SET_CONTACT"; name: string; phone: string }
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "SET_RESULT"; result: GenerateResponse }
  | { type: "SET_LOADING"; loading: boolean }
  | { type: "SET_ERROR"; error: string | null };

const initialState: QuestionnaireState = {
  step: 1,
  size: null,
  sun: null,
  styles: [],
  edible: null,
  maintenance: null,
  photoBase64: null,
  photoMimeType: null,
  contactName: "",
  contactPhone: "",
  result: null,
  loading: false,
  error: null,
};

function reducer(state: QuestionnaireState, action: Action): QuestionnaireState {
  switch (action.type) {
    case "SET_SIZE":
      return { ...state, size: action.value, step: state.step + 1 };
    case "SET_SUN":
      return { ...state, sun: action.value, step: state.step + 1 };
    case "SET_STYLES":
      return { ...state, styles: action.value };
    case "SET_EDIBLE":
      return { ...state, edible: action.value, step: state.step + 1 };
    case "SET_MAINTENANCE":
      return { ...state, maintenance: action.value, step: state.step + 1 };
    case "SET_PHOTO":
      return { ...state, photoBase64: action.base64, photoMimeType: action.mimeType };
    case "CLEAR_PHOTO":
      return { ...state, photoBase64: null, photoMimeType: null };
    case "SET_CONTACT":
      return { ...state, contactName: action.name, contactPhone: action.phone };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: Math.max(1, state.step - 1) };
    case "SET_RESULT":
      return { ...state, result: action.result, loading: false, error: null };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_ERROR":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}

export function useQuestionnaire() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const submit = async () => {
    if (!state.size || !state.sun || !state.edible || !state.maintenance) return;
    dispatch({ type: "SET_LOADING", loading: true });
    dispatch({ type: "SET_ERROR", error: null });

    const answers: QuestionnaireAnswers = {
      size: state.size,
      sun: state.sun,
      styles: state.styles.length > 0 ? state.styles : ["גן ים-תיכוני"],
      edible: state.edible,
      maintenance: state.maintenance,
      contactName: state.contactName,
      contactPhone: state.contactPhone,
      ...(state.photoBase64 && state.photoMimeType
        ? {
            photoBase64: state.photoBase64,
            photoMimeType: state.photoMimeType as QuestionnaireAnswers["photoMimeType"],
          }
        : {}),
    };

    try {
      const res = await fetch("/api/generate-garden", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers),
      });

      if (res.status === 429) {
        const data = await res.json();
        dispatch({ type: "SET_ERROR", error: data.error });
        return;
      }

      if (!res.ok) {
        dispatch({ type: "SET_ERROR", error: "שגיאה בשרת — נסה שוב" });
        return;
      }

      const data: GenerateResponse = await res.json();
      dispatch({ type: "SET_RESULT", result: data });
    } catch {
      dispatch({ type: "SET_ERROR", error: "בעיית רשת — בדוק חיבור ונסה שוב" });
    }
  };

  return { state, dispatch, submit };
}
