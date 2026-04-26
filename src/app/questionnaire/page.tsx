import type { Metadata } from "next";
import QuestionnaireWizard from "@/components/questionnaire/QuestionnaireWizard";

export const metadata: Metadata = {
  title: "שאלון עיצוב גינה | Forest Balcony",
  description: "מלא שאלון קצר וקבל הדמיה מותאמת אישית לגינת המרפסת שלך",
};

export default function QuestionnairePage() {
  return <QuestionnaireWizard />;
}
