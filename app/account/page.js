import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();
  console.log(session);
  const firstName = session.user.name.split(" ").at(0);
  return (
    <h1 className="text-accent-400 font-semibold text-2xl mb-7">
      Welcome, {firstName}
    </h1>
  );
}
