import { Button } from "@/components/ui/button/button";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = async (lng: string): Promise<void> => {
    await i18n.changeLanguage(lng);
  };

  return (
    <div className="text-center h-screen flex flex-col items-center justify-center">
      <h1 className="mb-4 text-6xl font-semibold text-slate-600">
        {t("home.greeting")}
        <br />
      </h1>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col gap-4">
        <p className="mt-4 text-gray-600 ">Select language:</p>
        <Button onClick={() => changeLanguage("en")}>
          Change Language to English
        </Button>
        <Button variant="outline" onClick={() => changeLanguage("es")}>
          Change Language to Spanish
        </Button>
      </div>
    </div>
  );
};

export default Home;
