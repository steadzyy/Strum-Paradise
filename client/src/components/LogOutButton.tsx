import { logout } from "@/action/action";

export function LogoutButton() {
  return (
    <form
      action={async () => {
        await logout();
      }}
    >
      <button
        type="submit"
        className="btn btn-outline btn-default text-white mr-5"
      >
        Logout
      </button>
    </form>
  );
}
