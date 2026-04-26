"use client";
import { useQuestionnaire } from "@/hooks/useQuestionnaire";
import ProgressBar from "./ProgressBar";
import ResultCard from "./ResultCard";
import StepSize from "./steps/StepSize";
import StepSun from "./steps/StepSun";
import StepStyle from "./steps/StepStyle";
import StepEdible from "./steps/StepEdible";
import StepMaintenance from "./steps/StepMaintenance";
import StepPhoto from "./steps/StepPhoto";
import StepContact from "./steps/StepContact";
import Button from "@/components/ui/Button";

export default function QuestionnaireWizard() {
  const { state, dispatch, submit } = useQuestionnaire();

  if (state.result) {
    return (
      <div className="min-h-screen bg-forest-50 py-16 px-4">
        <ResultCard data={state.result} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-forest-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-xl">
          {/* Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
            <ProgressBar step={state.step} />

            {state.step === 1 && (
              <StepSize
                onSelect={(v) => dispatch({ type: "SET_SIZE", value: v })}
              />
            )}

            {state.step === 2 && (
              <StepSun
                onSelect={(v) => dispatch({ type: "SET_SUN", value: v })}
              />
            )}

            {state.step === 3 && (
              <StepStyle
                selected={state.styles}
                onChange={(styles) =>
                  dispatch({ type: "SET_STYLES", value: styles })
                }
                onNext={() => dispatch({ type: "NEXT_STEP" })}
              />
            )}

            {state.step === 4 && (
              <StepEdible
                onSelect={(v) => dispatch({ type: "SET_EDIBLE", value: v })}
              />
            )}

            {state.step === 5 && (
              <StepMaintenance
                onSelect={(v) =>
                  dispatch({ type: "SET_MAINTENANCE", value: v })
                }
              />
            )}

            {state.step === 6 && (
              <StepPhoto
                hasPhoto={!!state.photoBase64}
                onImageSelected={(base64, mimeType) =>
                  dispatch({ type: "SET_PHOTO", base64, mimeType })
                }
                onClear={() => dispatch({ type: "CLEAR_PHOTO" })}
                onNext={() => dispatch({ type: "NEXT_STEP" })}
                onSkip={() => dispatch({ type: "NEXT_STEP" })}
              />
            )}

            {state.step === 7 && (
              <StepContact
                name={state.contactName}
                phone={state.contactPhone}
                loading={state.loading}
                error={state.error}
                onChange={(name, phone) =>
                  dispatch({ type: "SET_CONTACT", name, phone })
                }
                onSubmit={submit}
              />
            )}

            {/* Back button (not on step 1) */}
            {state.step > 1 && state.step < 7 && (
              <button
                onClick={() => dispatch({ type: "PREV_STEP" })}
                className="mt-6 text-forest-400 text-sm hover:text-forest-600 transition-colors flex items-center gap-1"
              >
                → חזרה
              </button>
            )}
          </div>

          {/* Step indicator */}
          <p className="text-center text-forest-400 text-xs mt-4">
            שלב {state.step} מתוך 7
          </p>
        </div>
      </div>
    </div>
  );
}
