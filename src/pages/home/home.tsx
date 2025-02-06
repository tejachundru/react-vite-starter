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
      <h1 className="mb-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-center text-6xl font-light text-transparent">
        {t("home.greeting")}
        <br />
      </h1>
      <div className="group mx-auto mb-4 flex flex-col gap-4">
        <Button
          className="translate-x-2 from-fuchsia-500 to-cyan-500 hover:bg-gradient-to-r"
          onClick={() => {
            window.location.href =
              "https://github.com/tejachundru/react-vite-starter?tab=readme-ov-file#get-started";
          }}
        >
          {t("home.get_started")}
          <ArrowRight className="ml-1 size-4 translate-x-2 duration-300 group-hover:size-6" />
        </Button>
      </div>
      <div className="mx-auto mb-4 flex flex-col gap-4">
        <p className="mt-4 text-white ">Select language:</p>
        <Button onClick={() => changeLanguage("en")}>
          Change Language to English
        </Button>
        <Button variant="outline" onClick={() => changeLanguage("es")}>
          Change Language to Spanish
        </Button>
      </div>
      <ToolsOverview />
      <div className="container mx-auto mt-4 gap-4 p-2">
        <div className="flex text-xl font-light text-white">
          Sample Users from-
          <b> Api call </b>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {users?.map((user) => (
            <UserCard user={user} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
