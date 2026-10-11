import Link from "next/link";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input
        placeholder="username"
        className="wd-username"
        defaultValue="ada"
      />{" "}
      <br />
      <input
        placeholder="password"
        type="password"
        className="wd-password"
        defaultValue="123"
      />{" "}
      <br />
      <label htmlFor="wd-ai-signin-note">Sample note</label>
      <input id="wd-ai-signin-note" placeholder="sample note" className="mb-2 w-full rounded border border-neutral-300 px-3 py-2" />
      <Link href="/dashboard" id="wd-signin-btn">
        Sign in
      </Link>{" "}
      <br />
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
