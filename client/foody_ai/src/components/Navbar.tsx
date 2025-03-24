export default function Navbar() {
  return (
    <div className="flex flex-row justify-around sticky top-0 py-4 px-4">
      <div>
        <h1 className="underline font-extralight">FoodyAI</h1>
      </div>
      <div className="flex flex-row gap-9">
        <button className="underline">
          <p>Pricing</p>
        </button>
        <button className="underline">
          <p className="font-extralight">About foodyAI</p>
        </button>
        <button className="underline font-extralight">
          <p>Login</p>
        </button>
      </div>
      <div>Sidebar</div>
    </div>
  );
}
