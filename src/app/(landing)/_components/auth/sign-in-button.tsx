import { Button } from "@/components/ui/button";
import { signIn, auth, signOut } from "@/server/auth";

export default async function SignIn() {
  const session = await auth();

  if (!session || !session.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <Button type="submit" className="text-[13px] h-fit py-2.5 px-3">
          Signin with Google
        </Button>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button
        type="submit"
        className="text-[13px] h-fit py-2.5 px-3"
        variant={"secondary"}
      >
        Log Out
      </Button>
    </form>
  );
}
