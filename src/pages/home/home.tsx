import ToolsOverview from "@/components/tools-overview";
import { Button } from "@/components/ui/button/button";
import UserCard from "@/components/user-card";
import { useLazyGetUserQuery } from "@/services/user";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [getUsers, { isLoading, data: users }] = useLazyGetUserQuery();

  useEffect(() => {
    getUsers()
      .then(() => {
        console.log("Users fetched");
      })
      .catch(() => {
        console.log("Error fetching users");
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const changeLanguage: (lng: string) => Promise<void> = async (
    lng: string
  ) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <main className="flex flex-col overflow-y-auto bg-slate-900 p-6">
      <h1 className="mb-4 text-6xl font-light text-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
        {t("home.greeting")}
        <br />
      </h1>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-10 w-10 text-red-500 translate-x-5"
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
      <div className="flex flex-col gap-4 mx-auto mb-4">
        <p className="mt-4 text-white ">Select language:</p>
        <Button onClick={() => changeLanguage("en")}>
          Change Language to English
        </Button>
        <Button variant="outline" onClick={() => changeLanguage("es")}>
          Change Language to Spanish
        </Button>
      </div>
      <ToolsOverview />
      <div className="container mx-auto px-2 py-2 gap-4 mt-4">
        <div className="text-xl font-light flex text-white">
          Sample Users from-
          <b> Api call </b>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 sm:grid-cols-2 gap-4 mt-2">
          {users?.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
