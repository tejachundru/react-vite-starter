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
    <main className="h-screen flex flex-col overflow-y-auto">
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
      <div className="flex flex-col gap-4 w-1/2 mx-auto mb-4">
        <p className="mt-4 text-gray-600 ">Select language:</p>
        <Button onClick={() => changeLanguage("en")}>
          Change Language to English
        </Button>
        <Button variant="outline" onClick={() => changeLanguage("es")}>
          Change Language to Spanish
        </Button>
      </div>
      <div className="text-xl font-semibold text-slate-600 gap-2 mt-2 flex items-center justify-center">
        Sample users(with api):
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {users?.map((user) => (
          <UserCard user={user} />
        ))}
      </div>
    </main>
  );
};

export default Home;
