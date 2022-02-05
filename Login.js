function Login() {
  return (
    <>
      <div className="md:container md:mx-auto m-0 p-0 box-border">
        <div className="text-center mt-12 mb-12">HOMECLUB</div>

        <div className="bg-blue-600 rounded-xl">
          <div className="flex justify-around py-4">
            <a className="text-white no-underline" href="/">
              Login
            </a>
            <a className="text-white no-underline" href="/">
              Sing up
            </a>
          </div>

          <div className="bg-white px-5 pt-5 rounded-xl">
            <div>
              <h1 className="font-semibold text-2xl">Welcome back</h1>
              <p className="font-light text-xs">Login with your account</p>
            </div>

            <form className="">
              <p className="mt-5">Username</p>
              {/* <label for="username">Username</label> */}
              <div className="col-auto">
                <label for="inputPassword2" className="visually-hidden">
                  Username
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder=""
                />
              </div>
            </form>
            <form className="pb-3">
              <p className="mt-2">Password</p>
              {/* <label for="password">Password</label> */}
              <div className="col-auto">
                <label for="inputPassword2" className="visually-hidden">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword2"
                  placeholder=""
                />
              </div>
            </form>

            <div className="max-w-sm m-auto p-1.5 mt-3 bg-blue-600 text-center rounded-full">
              <button className="text-white">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
