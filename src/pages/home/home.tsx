import ToolsOverview from "@/components/tools-overview";
import { Button } from "@/components/ui/button/button";
import UserCard from "@/components/user-card";
import { useLazyGetUserQuery } from "@/services/user";
import { ArrowRight } from "lucide-react";
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
      <div className="flex flex-col gap-4 mx-auto mb-4 group">
        <Button
          className="hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 translate-x-2"
          onClick={() => {
            window.location.href =
              "https://github.com/tejachundru/react-vite-starter?tab=readme-ov-file#get-started";
          }}
        >
          {t("home.get_started")}
          <ArrowRight className="ml-1 size-4 group-hover:size-6 translate-x-2 duration-300" />
        </Button>
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
