var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    __hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0 && (target[prop] = source[prop]);
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source))
      exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop) && (target[prop] = source[prop]);
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var import_react3 = require("@remix-run/react");

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-WATGTV4J.css";

// app/components/error.tsx
var import_react2 = require("@remix-run/react");
function ErrorHandler({ name, status }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react2.Links, null), /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full pt-16 pb-12 flex flex-col bg-white mb-72 mt-28"
  }, /* @__PURE__ */ React.createElement("main", {
    className: "flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 flex justify-center"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/",
    className: "inline-flex"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "QuickLook"))), /* @__PURE__ */ React.createElement("div", {
    className: "py-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-sm font-semibold text-indigo-600 uppercase tracking-wide"
  }, status, " error : ", name), /* @__PURE__ */ React.createElement("h1", {
    className: "mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl"
  }, "Page not found."), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-500"
  }, "Sorry, we couldn\u2019t find the page you\u2019re looking for."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "text-base font-medium text-indigo-600 hover:text-indigo-500"
  }, "Try Again")))))));
}

// app/components/Common/Header.tsx
var import_react_router_dom = require("react-router-dom");

// assets/images/logos/quicklook-icon.svg
var quicklook_icon_default = "/build/_assets/quicklook-icon-EX2BPKZ6.svg";

// app/components/Common/Header.tsx
function HeaderSecondary({ children }) {
  let Location = (0, import_react_router_dom.useLocation)();
  return /* @__PURE__ */ React.createElement("header", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-800 pt-2 pb-2"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6",
    "aria-label": "Global"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full items-center justify-between md:w-auto"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/",
    className: "flex items-center justify-center space-x-2"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-auto sm:h-10",
    src: quicklook_icon_default,
    alt: ""
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold text-white"
  }, "QuickLook.me")))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:flex md:items-center md:space-x-2"
  }, Location.pathname.includes("/signup") || Location.pathname.includes("/forgot-password") ? /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/login",
    className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center"
  }, "Sign in to your Account") : /* @__PURE__ */ React.createElement(import_react_router_dom.Link, {
    to: "/signup",
    className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center"
  }, "Get Started For Free")))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_react3.Outlet, null)), /* @__PURE__ */ React.createElement(import_react3.Scripts, null));
}
function Document({ children }) {
  return /* @__PURE__ */ React.createElement("html", {
    className: "h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']",
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("title", null, "QuickLook.me"), /* @__PURE__ */ React.createElement("meta", {
    name: "description",
    content: "Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don\u2019t get audited."
  }), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "flex h-full flex-col"
  }, children, /* @__PURE__ */ React.createElement(import_react3.LiveReload, null)));
}
function Layout({ children }) {
  let Location = (0, import_react3.useLocation)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, Location.pathname.includes("/login") || Location.pathname.includes("/signup") || Location.pathname.includes("/terms") || Location.pathname.includes("/privacy") || Location.pathname.includes("/forgot-password") || Location.pathname.includes("/refund-policy") || Location.pathname.includes("/successlogin") ? /* @__PURE__ */ React.createElement(HeaderSecondary, null) : /* @__PURE__ */ React.createElement(React.Fragment, null), /* @__PURE__ */ React.createElement("div", null, children));
}
function CatchBoundary() {
  let caughtError = (0, import_react3.useCatch)();
  if (caughtError.status === 404)
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ErrorHandler, {
      name: caughtError.statusText,
      status: caughtError.status
    }));
  throw new Error("Not Found!");
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", {
    className: "bg-red-200"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-5xl"
  }, "Error"), /* @__PURE__ */ React.createElement("p", {
    className: "font-sans text-xl"
  }, error.message))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\forgot-password\verification\$token.tsx
var token_exports = {};
__export(token_exports, {
  loader: () => loader
});
var import_node4 = require("@remix-run/node");

// app/services/auth.service.server.ts
var import_node = require("@remix-run/node");

// app/database/connection.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/services/user.service.serevr.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
async function createUser(userRegister) {
  let password = await import_bcryptjs.default.hash(userRegister.password, 10), user = await db.user.create({
    data: {
      firstname: userRegister.firstname,
      lastname: userRegister.lastname,
      username: userRegister.username,
      email: userRegister.email,
      password
    }
  });
  return { id: user.id, email: user.email };
}
async function findUserByEmail(email) {
  let user = await db.user.findFirst({
    where: {
      email
    }
  });
  return user || void 0;
}

// app/services/auth.service.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs")), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "quicklook-session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function register(user) {
  if (await db.user.count({
    where: {
      email: user.email
    }
  }))
    throw (0, import_node.json)({ success: !1, message: "User Already Exists" }, { status: 400 });
  let newUser = await createUser(user);
  if (!newUser)
    throw (0, import_node.json)({
      error: "Something went wrong trying to create a new user.",
      fields: { email: user.email, password: user.password }
    }, { status: 400 });
  return (0, import_node.json)({ success: !0, id: newUser.id });
}
async function login(loginForm) {
  let user = await db.user.findFirst({
    where: {
      email: loginForm.email
    }
  });
  if (!user || !await import_bcryptjs2.default.compare(loginForm.password, user.password))
    throw (0, import_node.json)({ error: "Either email or password you entered was not correct. Please try again." }, { status: 400 });
  if (!(user == null ? void 0 : user.isVerified))
    throw (0, import_node.json)({ error: "Account Not verified" }, { status: 401 });
  return { id: user.id, email: loginForm.email };
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await db.user.findUnique({
      where: { id: userId },
      select: { id: !0, email: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/services/password.service.server.ts
var import_uuid = require("uuid");

// app/utils/date.server.ts
async function addHoursToDate(date, hours) {
  return new Date(new Date(date).setHours(date.getHours() + hours));
}
async function differenceInHours(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1e3;
  return diff /= 60 * 60, Math.abs(Math.round(diff));
}

// app/services/mail.service.server.ts
var import_node2 = require("@remix-run/node");

// app/services/userVerification.service.server.ts
var import_bcryptjs3 = __toESM(require("bcryptjs"));
async function createUserVerificationToken(userId, token) {
  let hashedToken = await import_bcryptjs3.default.hash(token, 10);
  await db.userVerification.create({
    data: {
      userId,
      uniqueString: hashedToken,
      expiresAt: await addHoursToDate(new Date(Date.now()), 6)
    }
  });
}
async function deleteUserVerificationToken(userId) {
  await db.userVerification.delete({
    where: {
      userId
    }
  });
}
async function checkTokenValidation(userId, token) {
  let userVerification = await db.userVerification.findFirst({
    where: {
      userId
    }
  });
  return !!(await import_bcryptjs3.default.compare(token, userVerification == null ? void 0 : userVerification.uniqueString) && userVerification && await differenceInHours(new Date(Date.now()), userVerification == null ? void 0 : userVerification.expiresAt) <= 6);
}

// app/services/mail.service.server.ts
var sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_KEY);
async function sendMail({ to, from, subject, text, html }) {
  let emailStatus, msg = {
    to,
    from,
    subject,
    text,
    html
  };
  await sgMail.send(msg).then((response) => {
    emailStatus = response[0].statusCode;
  }).catch((error) => {
    throw error;
  });
}
async function verifyEmail(token, userId) {
  if (await checkTokenValidation(userId, token))
    return await db.user.update({
      where: {
        id: userId
      },
      data: {
        isVerified: !0
      }
    }), !0;
  throw (0, import_node2.json)({
    success: !1,
    message: "Verification Token Invalid"
  });
}

// app/services/password.service.server.ts
var import_bcryptjs4 = __toESM(require("bcryptjs")), import_node3 = require("@remix-run/node");
async function sendResetPasswordLink(email, url) {
  let user = await db.user.findFirst({ where: { email } });
  if (!user)
    return !1;
  let generatedToken = (0, import_uuid.v4)();
  try {
    return await sendMail({
      to: email,
      from: process.env.SENDGRID_EMAIL,
      subject: "Reset Password",
      text: `${url}/verification/${generatedToken}`,
      html: `<h1 style=" font-family: Arial, Helvetica, sans-serif; font-size: 32px;">Click on the Link below to reset your password</h1>
      <a href=${url}/verification/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; font-size: 22px; border:2px solid blue; border-radius:5px; padding:5px"> Reset Password</a>
      <div style="margin-top:40px">
      <h3>QuickLook.me</h3>
      <span>Describing you with just one link</span></div>`
    }), await createPasswordResetLink(user.id, generatedToken), !0;
  } catch {
    throw (0, import_node3.json)({
      error: "Something went wrong while resetting password.",
      fields: { email }
    }, { status: 400 });
  }
}
async function createPasswordResetLink(userId, token) {
  let hashedToken = await import_bcryptjs4.default.hash(token, 10);
  await db.resetPasswordLink.findFirst({
    where: { userId }
  }) ? await db.resetPasswordLink.update({
    where: { userId },
    data: {
      uniqueString: hashedToken,
      expiresAt: await addHoursToDate(new Date(Date.now()), 6)
    }
  }) : await db.resetPasswordLink.create({
    data: {
      userId,
      uniqueString: hashedToken,
      expiresAt: await addHoursToDate(new Date(Date.now()), 6)
    }
  });
}
async function deletePasswordResetLink(userId) {
  return !!await db.resetPasswordLink.delete({
    where: {
      userId
    }
  });
}
async function verifyResetPasswordLink(token, userId) {
  let resetPasswordLink = await db.resetPasswordLink.findFirst({
    where: {
      userId
    }
  });
  return !!(await import_bcryptjs4.default.compare(token, resetPasswordLink == null ? void 0 : resetPasswordLink.uniqueString) && resetPasswordLink && await differenceInHours(new Date(Date.now()), resetPasswordLink == null ? void 0 : resetPasswordLink.expiresAt) <= 6);
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\forgot-password\verification\$token.tsx
var loader = async ({ request, params }) => {
  let user = await getUser(request);
  if (await verifyResetPasswordLink(params.token, user == null ? void 0 : user.id)) {
    if (!await deletePasswordResetLink(user == null ? void 0 : user.id))
      throw (0, import_node4.json)({
        error: "You Cannot Use the reset passsword link"
      }, { status: 400 });
    return await createUserSession(user == null ? void 0 : user.id, " /login");
  }
};

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\confirmforgotpassword\index.tsx
var confirmforgotpassword_exports = {};
__export(confirmforgotpassword_exports, {
  default: () => confirmforgotpassword
});

// assets/images/quicklook-icon.png
var quicklook_icon_default2 = "/build/_assets/quicklook-icon-FTXZW4DA.png";

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\confirmforgotpassword\index.tsx
function confirmforgotpassword() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center mt-60"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ React.createElement("img", {
    src: quicklook_icon_default2,
    alt: "",
    className: "h-auto w-20 mx-auto"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-3xl text-center font-black"
  }, "Reset Your Password")), /* @__PURE__ */ React.createElement("div", {
    className: "w-2/5 h-auto shadow-sm shadow-gray-300 mt-12 p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4 p-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg font-semibold "
  }, "Check your Inbox"), /* @__PURE__ */ React.createElement("p", null, "A password reset email has been sent to you on your specified email ID if it exists.", /* @__PURE__ */ React.createElement("br", null), " Please check your email and click on reset password link. You should be login into your", /* @__PURE__ */ React.createElement("br", null), " account after resetting your password.", " "), /* @__PURE__ */ React.createElement("a", {
    href: "/login",
    className: "text-blue-500 cursor-pointer font-medium"
  }, "Go to Login Page \u2192")))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\signup\verification\$token.tsx
var token_exports2 = {};
__export(token_exports2, {
  loader: () => loader2
});
var loader2 = async ({ request, params }) => {
  let user = await getUser(request);
  if (await verifyEmail(params.token, user == null ? void 0 : user.id))
    return await deleteUserVerificationToken(user == null ? void 0 : user.id), await createUserSession(user == null ? void 0 : user.id, "/successlogin");
};

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\signup\verification\index.tsx
var verification_exports = {};
__export(verification_exports, {
  default: () => Example
});
var import_solid = require("@heroicons/react/solid");
function Example() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md bg-green-50 p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React.createElement(import_solid.CheckCircleIcon, {
    className: "h-5 w-5 text-green-400",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "ml-3"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm font-medium text-green-800"
  }, "Email Sent successfully"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-2 text-sm text-green-700"
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-mx-2 -my-1.5 flex"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
  }, "View status"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
  }, "Dismiss"))))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\forgot-password\index.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  action: () => action,
  default: () => Forgotpassword
});
var import_node5 = require("@remix-run/node"), import_node6 = require("@remix-run/node"), import_formik2 = require("formik"), import_react4 = require("@remix-run/react"), import_react5 = require("react"), Yup = __toESM(require("yup"));

// app/components/Common/FormikInput.tsx
var import_formik = require("formik");

// app/components/Common/InputCheckbox.tsx
var InputCheckbox = (_a) => {
  var props = __objRest(_a, []);
  let _a2 = __spreadValues({}, props), { touched, error, validation } = _a2, rest = __objRest(_a2, ["touched", "error", "validation"]);
  return /* @__PURE__ */ React.createElement("input", __spreadValues({
    className: `h-4 w-4 focus:outline-none text-indigo-600  border-gray-300 rounded focus:ring-0 focus:ring-transparent focus:ring-offset-0 ${error && touched || validation && error ? " border-red-300" : " border-gray-300"}`
  }, rest));
}, InputCheckbox_default = InputCheckbox;

// app/components/Common/FormikInput.tsx
var FormikInput = (_a) => {
  var _b = _a, { label } = _b, props = __objRest(_b, ["label"]);
  let [field, meta] = (0, import_formik.useField)(props);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: field.name,
    className: "block text-sm font-medium text-gray-700"
  }, label), /* @__PURE__ */ React.createElement("input", __spreadProps(__spreadValues(__spreadValues({}, field), props), {
    autoComplete: "off"
  })), /* @__PURE__ */ React.createElement(import_formik.ErrorMessage, {
    className: "text-red-600 mt-2 text-sm",
    component: "div",
    name: field.name
  }));
}, FormikCheckbox = (_a) => {
  var props = __objRest(_a, []);
  let [field, meta] = (0, import_formik.useField)(props.name), { touched, error } = __spreadValues({}, meta);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement(InputCheckbox_default, __spreadValues(__spreadValues({
    touched,
    error
  }, field), props)), /* @__PURE__ */ React.createElement("label", {
    htmlFor: props.name,
    className: "ml-2 block text-sm text-gray-900",
    dangerouslySetInnerHTML: { __html: props.label }
  })), props.validation && error ? /* @__PURE__ */ React.createElement("span", {
    className: "text-red-600 mt-2 text-sm"
  }, error) : /* @__PURE__ */ React.createElement(import_formik.ErrorMessage, {
    name: props.name,
    component: "span",
    className: "text-red-600 mt-2 text-sm"
  }));
};

// app/components/Utils/validators.ts
var yup = __toESM(require("yup")), hasEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, validateRequiredEmail = () => yup.string().trim().email("Email is not valid").required("Email is required").matches(hasEmail, "Email is not valid");

// app/utils/validator.server.ts
var validateEmail = async (email) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.length || !validRegex.test(email))
    return "Please enter a valid email address";
}, validatePassword = async (password) => {
  if (password.length < 4)
    return "Please enter a password that is at least 5 characters long";
}, validateName = async (name) => {
  if (!name.length)
    return "Please enter a value";
}, validateUsername = async (username) => {
  if (await db.user.count({
    where: {
      username
    }
  }))
    return "This ID has already been taken. Please choose another.";
};

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\forgot-password\index.tsx
var action = async ({ request }) => {
  let email = (await request.formData()).get("email"), url = request.url, errors = {
    email: await validateEmail(email)
  };
  return Object.values(errors).some(Boolean) ? (0, import_node6.json)({ errors, fields: { email }, form: action }, { status: 400 }) : await sendResetPasswordLink(email, url) ? (0, import_node5.redirect)("/confirmforgotpassword") : (0, import_node5.redirect)("/login");
};
function Forgotpassword() {
  let SignInSchema = Yup.object().shape({
    email: validateRequiredEmail()
  }), initialValues = {
    email: ""
  }, [showModal, toggleModal] = (0, import_react5.useState)(!1), popUpProps = {
    toggleModal,
    headline: "Password reset email sent!",
    text: "Password reset email has been shared on registered email address. Please set new password with the help of link",
    buttonText: "Go back to login",
    linkText: "signin",
    dataAttr: "back-to-login"
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-md w-full space-y-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: quicklook_icon_default,
    alt: "",
    className: "mx-auto h-20 w-auto"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-6 text-center text-3xl font-[750] text-gray-900"
  }, "Forgot Password?"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-5 flex items-center justify-start text-base text-gray-500"
  }, "Please enter your email address to receive reset password link")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 space-y-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md shadow-sm -space-y-px"
  }, /* @__PURE__ */ React.createElement(import_formik2.Formik, {
    initialValues,
    validationSchema: SignInSchema,
    onSubmit: (values) => {
    }
  }, (formik) => /* @__PURE__ */ React.createElement(import_react4.Form, {
    className: "space-y-4",
    method: "post",
    noValidate: !0
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3",
    type: "email",
    name: "email",
    label: "Email address"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, "Send Reset Password Instructions"))))))))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\refund-policy\index.tsx
var refund_policy_exports = {};
__export(refund_policy_exports, {
  default: () => Refund
});
var import_react_router_dom2 = require("react-router-dom"), import_solid2 = require("@heroicons/react/solid");

// app/components/Footer.tsx
function Footer() {
  return /* @__PURE__ */ React.createElement("footer", {
    className: "bg-slate-50"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center gap-2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: quicklook_icon_default,
    alt: "",
    className: "mx-auto h-16 w-auto"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "text-lg font-medium"
  }, "QuickLook.me")), /* @__PURE__ */ React.createElement("nav", {
    className: "mt-10 text-sm",
    "aria-label": "quick links"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "-my-1 flex justify-center space-x-6"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#features",
    className: "rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  }, "Features")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#testimonials",
    className: "rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  }, "Testimonials")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#pricing",
    className: "rounded-lg px-2 py-1 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
  }, "Pricing"))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-6"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/terms"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Terms & Conditions"))), /* @__PURE__ */ React.createElement("a", {
    href: "/privacy"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Privacy Policy"))), /* @__PURE__ */ React.createElement("a", {
    href: "/refund-policy"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Refund Policy ")))), /* @__PURE__ */ React.createElement("p", {
    className: "mt-6 text-sm text-slate-500 sm:mt-0"
  }, "Copyright @2022 Crownstack Technologies. All rights reserved reserved."))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\refund-policy\index.tsx
function Refund() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    id: "__next",
    "data-reactroot": ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow w-full max-w-7xl mx-auto xl:px-8 xl:flex min-h-full py-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 bg-white xl:flex max-content top-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "b xl:flex-shrink-0 xl:w-64 bg-white h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full relative "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 border-gray-200 rounded-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex justify-center lg:justify-end"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-lg w-full lg:max-w-xs"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "search",
    className: "sr-only"
  }, "Search"), /* @__PURE__ */ React.createElement("div", {
    className: "relative text-gray-400 focus-within:text-gray-600"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "search",
    className: "block w-full bg-white py-2 pl-2 pr-3 border border-solid border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-500 focus:ring-white focus:border-white sm:text-sm",
    placeholder: "Search",
    type: "text",
    name: "search"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "absolute inset-y-0 right-2 pl-3 flex items-center"
  }, /* @__PURE__ */ React.createElement(import_solid2.SearchIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))))), /* @__PURE__ */ React.createElement("h1", {
    className: "text-base font-extrabold mt-2 sm:tracking-tight "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400"
  }, "CATEGORIES")), /* @__PURE__ */ React.createElement("ul", {
    className: "list-none list-inside ml-5 mt-2 mb-5 text-sm font-semibold text-gray-500"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "#"
  }, "Free Pages")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "#"
  }, "Pro Pages")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "#"
  }, "Domains")))))))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white lg:min-w-0 lg:flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " py-6 px-4 sm:px-6 lg:px-8 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " h-full "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative inset-0 border-gray-200 rounded-lg"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between w-2/3"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-extrabold py-4 sm:text-5xl sm:tracking-tight"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-900"
  }, "Refund Policy")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-5 w-5",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z",
    "clip-rule": "evenodd"
  })))), /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg font-semibold text-gray-800 mt-6 ml-2"
  }, "Last updated: 29/06/2022"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, " You may request a refund within 3 days of your annual Pro purchase or Pro renewal."), /* @__PURE__ */ React.createElement("p", {
    className: "mt-5 text-base text-gray-800"
  }, "If your request is received after that 3-day window, the charge is non-refundable. "), /* @__PURE__ */ React.createElement("ul", {
    className: "list-disc list-inside ml-5 mt-5 mb-5 text-base text-gray-800"
  }, /* @__PURE__ */ React.createElement("li", null, "Email address associated with your about.me page"), /* @__PURE__ */ React.createElement("li", null, "Link to your about.me page (about.me/yourusername)"), /* @__PURE__ */ React.createElement("li", null, "Date of purchase or renewal (if you have a screenshot of the receipt, even better!)"), /* @__PURE__ */ React.createElement("li", null, 'The word "REFUND" in the body of your email')), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "If you are eligible for a refund, your request will be evaluated and granted within 30 days. "), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6"
  }, "RELATED ARTICLES"), /* @__PURE__ */ React.createElement("p", {
    className: "flex mt-2 text-base text-gray-800"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-3 w-3",
    viewBox: "0 0 20 20",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("path", {
    "fill-rule": "evenodd",
    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
    "clip-rule": "evenodd"
  }))), /* @__PURE__ */ React.createElement(import_react_router_dom2.Link, {
    to: "#",
    className: "ml-2 font-medium text-indigo-600 hover:text-indigo-500"
  }, "How do I delete my page?")))))))), /* @__PURE__ */ React.createElement("div", {
    className: "w-full max-w-container px-2 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement(Footer, null))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\confirmemail\index.tsx
var confirmemail_exports = {};
__export(confirmemail_exports, {
  default: () => confirmEmail
});
function confirmEmail() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center mt-60"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col "
  }, /* @__PURE__ */ React.createElement("img", {
    src: quicklook_icon_default2,
    alt: "",
    className: "h-auto w-20 mx-auto"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "text-3xl text-center font-black"
  }, "Confirm your email")), /* @__PURE__ */ React.createElement("div", {
    className: "w-2/5 h-auto shadow-sm shadow-gray-300 mt-12 p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col gap-4 p-auto"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-lg font-semibold "
  }, "Check your Inbox"), /* @__PURE__ */ React.createElement("p", null, "An confirmation email has been sent to you on your specified email Id. Please check ", /* @__PURE__ */ React.createElement("br", null), " your email and click on email confirmation link. You should be login into your account ", /* @__PURE__ */ React.createElement("br", null), " after confirming your email.", " "), /* @__PURE__ */ React.createElement("a", {
    href: "/login",
    className: "text-blue-500 cursor-pointer font-medium"
  }, "Go to Login Page \u2192")))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\successlogin\index.tsx
var successlogin_exports = {};
__export(successlogin_exports, {
  action: () => action2,
  default: () => SuccessLogin
});
var import_solid3 = require("@heroicons/react/solid"), import_node7 = require("@remix-run/node"), import_formik3 = require("formik"), import_react_router_dom3 = require("react-router-dom"), Yup2 = __toESM(require("yup"));
var import_react6 = require("@remix-run/react"), action2 = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), errors = {
    email: await validateEmail(email),
    password: await validatePassword(password)
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node7.json)({ errors, fields: { email, password }, form: action2 }, { status: 400 });
  let user = await login({ email, password });
  return createUserSession(user.id, "/");
};
function SuccessLogin() {
  let validate = Yup2.object().shape({
    email: Yup2.string().email("Email is invalid").required("Email is required").matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Email is invalid"),
    password: Yup2.string().required("Password is required").min(4, "Your Password must not be less than 4 characters.")
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-4 mb-8 items-center justify-center bg-green-50 rounded-md px-6 py-2 w-2/7"
  }, /* @__PURE__ */ React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React.createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z",
    fill: "#34D399"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-#065F46 font-normal"
  }, "Your email has been confirmed. Please login to", /* @__PURE__ */ React.createElement("br", null), " continue.")), /* @__PURE__ */ React.createElement("div", {
    className: "max-w-md w-full space-y-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: quicklook_icon_default,
    alt: "",
    className: "mx-auto h-20 w-auto"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-6 text-center text-3xl font-[750] text-gray-900"
  }, "Sign in to your account")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 space-y-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md shadow-sm -space-y-px"
  }, /* @__PURE__ */ React.createElement(import_formik3.Formik, {
    initialValues: {
      email: "",
      password: "",
      remember_me: !1
    },
    validationSchema: validate,
    onSubmit: (values) => {
    }
  }, (formik) => /* @__PURE__ */ React.createElement(import_react6.Form, {
    className: "space-y-4",
    method: "post",
    noValidate: !0
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    type: "email",
    name: "email",
    placeholder: "Email address"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    type: "password",
    name: "password",
    placeholder: "Password"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mt-3.5 font-semibold"
  }, /* @__PURE__ */ React.createElement(FormikCheckbox, {
    type: "checkbox",
    name: "rememberMe",
    label: "Remember Me",
    className: "h-4 w-4 text-gray-900 focus:ring-indigo-500 border-gray-300 rounded ml-2 block text-sm"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm mt-3.5"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "/forgot-password",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Forgot your password?"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute left-0 inset-y-0 flex items-center pl-3"
  }, /* @__PURE__ */ React.createElement(import_solid3.LockClosedIcon, {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
    "aria-hidden": "true"
  })), "Sign in")), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-center text-sm"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom3.Link, {
    to: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Did not receive confirmation email?"))))))))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\dashboard\index.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard
});
var import_react_router_dom4 = require("react-router-dom");
function Dashboard() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-800 pt-2 pb-2"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6",
    "aria-label": "Global"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-1 items-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full items-center justify-between md:w-auto"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: "/",
    className: "flex items-center justify-center space-x-2"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-auto sm:h-10",
    src: quicklook_icon_default,
    alt: ""
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-2xl font-bold text-white"
  }, "QuickLook.me")))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden md:flex md:items-center md:space-x-2"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom4.Link, {
    to: "/login",
    className: "ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 text-center"
  }, "Sign out"))))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\privacy\index.tsx
var privacy_exports = {};
__export(privacy_exports, {
  default: () => privacy
});
var import_react7 = require("@remix-run/react");
function privacy() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow w-full max-w-7xl mx-auto xl:px-8 xl:flex min-h-full py-10 -mb-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 bg-white xl:flex "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "b xl:flex-shrink-0 xl:w-64 bg-white h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full relative "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 border-gray-200 rounded-lg "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-base font-extrabold py-2 sm:tracking-tight "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400"
  }, "CONTACT US")), /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm font-semibold text-gray-500 "
  }, "Send us an email", /* @__PURE__ */ React.createElement("br", null), "abc@email.com")))))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white lg:min-w-0 lg:flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " py-6 px-4 sm:px-6 lg:px-8 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " h-full "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " relative inset-0 border-gray-200 rounded-lg"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-extrabold py-4 sm:text-5xl sm:tracking-tight"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-900"
  }, "Privacy Policy")), /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg font-semibold text-gray-800 mt-6 ml-2"
  }, "Last updated: 29/06/2022", " "), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "1. Introduction"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "Skia, registered at New Delhi (India) takes your privacy seriously and considers it important for your personal data (hereafter \u201Cyour data\u201D) to be treated with the necessary care and confidentiality at all times.", /* @__PURE__ */ React.createElement("p", null, "This Privacy Statement explains how our organisation uses the personal data we collect from you when you and why. If you have any questions after reading this Privacy Statement, feel free to contact us at admin@skia.me"), /* @__PURE__ */ React.createElement("p", null, "To avoid any misunderstandings, we would like to clarify that this Privacy Statement is applicable on processing of personal data from: Account Registeration Personal data added by Account owners about employees"), /* @__PURE__ */ React.createElement("p", null, "Website visitors: persons who visit our marketing landing page Skia is a provider of this service, and not the owner of the collected data. The creator (the person who sends out a form) is responsible for the data he/she collects and thus data controller of respondent data")), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "2. What data do we collect"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("p", null, "Electronical identification data: including IP address, device & browser data, location data"), "Information about your use of our website: including how you end up on our website, the pages you visited, the way in which you navigate on these web pages, the duration of the visit. Since we rely on the use of cookies for processing the above mentioned data, please refer to our Cookie Statement for more information.", /* @__PURE__ */ React.createElement("p", null, "Registration information "), "When you register for an account, we collect your first and last name, username, password and email address.", /* @__PURE__ */ React.createElement("p", null, "Billing information "), "If you have paid subscrption, that subscription is managed through Stripe and we do not store any billing information."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "3. How will we use your data"), /* @__PURE__ */ React.createElement("p", null, "We collect your data with your consent or in order to:", /* @__PURE__ */ React.createElement("p", null, "Deliver our services to you "), /* @__PURE__ */ React.createElement("p", null, "To improve your user experience"), /* @__PURE__ */ React.createElement("p", null, "To email you with essential product updates"), /* @__PURE__ */ React.createElement("p", null, "To troubleshoot product functionality and fix bugs"), /* @__PURE__ */ React.createElement("p", null, "To respond to legal requests or prevent fraud")), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "4. Data we share"), /* @__PURE__ */ React.createElement("p", null, "We only share your information with our service providers who help us operate our business, in which case those third parties are required to comply with the GDPR framework."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "5. Data retention"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-5 text-base text-gray-800"
  }, "If you are a skia user we do not delete the data in your account. You are responsible for the time period for which you store the data. You can delete data in your skia account. If you are a respondent, you will need to ask the creator how long your responses will be stored in skia. We honor all deletions, If you wish to delete all records from our server, just write as an email and everything will be deleted."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "6. Your data protection rights"), /* @__PURE__ */ React.createElement("p", null, "As our Privacy Policy states, if you\u2019ve submitted your personal data through skia web app, the creator of that record is responsible for this data. Skia only processes this data on the creator\u2019s behalf. Skia creators can exercise their rights directly with us, but respondents should contact the person or organization which created the records. If this isn't possible, please contact us. We'll help in any way we can."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6"
  }, "7. Marketing"), /* @__PURE__ */ React.createElement("p", null, "We would like to send you information about products and services of ours that we think you might like. If you have agreed to receive marketing, you may always op out at a later date. You have the right at any time to stop Skia from contacting you for marketing purposes."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6"
  }, "8. Cookies"), /* @__PURE__ */ React.createElement("p", null, "Cookies are a small text files that are placed on your computer or mobile device by websites you visit. They are widely used in order to make a website work, or work more efficiently, as well as to provide information to the owners of the site. Skia uses cookies to improve your experience on our website and with our product."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6"
  }, "9. Changes to our Privacy Policy"), /* @__PURE__ */ React.createElement("p", null, "We can make changes to this Privacy Policy from time to time. In circumstances where a change will materially change the way in which we collect or use your personal information or data, we will send a notice of this change to all of our account holders. We keep our privacy policy under regular review and will place any updates on this web page."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "10. Contact"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:"), /* @__PURE__ */ React.createElement("p", null, " Crownstack Technologies Pvt. Ltd"), /* @__PURE__ */ React.createElement("p", null, " admin@skia.me"))))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block"
  }, "Ready to dive in?"), /* @__PURE__ */ React.createElement("span", {
    className: "block text-indigo-600"
  }, "Start your free trial today.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex lg:mt-0 lg:flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex rounded-md shadow"
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/signup",
    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
  }, "Get started")), /* @__PURE__ */ React.createElement("div", {
    className: "ml-3 inline-flex rounded-md shadow"
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "#",
    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
  }, "Learn more"))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between bg-gray-800 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-6 text-white mx-4"
  }, /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/terms"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Terms & Conditions"))), /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/privacy"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Privacy Policy"))), /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: "/refund"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Refund Policy ")))), /* @__PURE__ */ React.createElement("p", {
    className: "mt-6 text-sm text-slate-500 sm:mt-0 ml-2"
  }, "Copyright @2022 Crownstack Technologies. All rights reserved reserved.")));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\signup\index.tsx
var signup_exports = {};
__export(signup_exports, {
  action: () => action3,
  default: () => SignUp
});
var import_solid4 = require("@heroicons/react/solid"), import_formik4 = require("formik"), import_react_router_dom5 = require("react-router-dom"), Yup3 = __toESM(require("yup"));
var import_uuid2 = require("uuid");
var import_react8 = require("@remix-run/react"), action3 = async ({ request }) => {
  let sentMail, form = await request.formData(), firstname = form.get("firstName"), lastname = form.get("lastName"), email = form.get("email"), password = form.get("password"), username = form.get("profileId"), url = request.url;
  console.log(url);
  let json8 = await new Response(JSON.stringify({ url })).json();
  console.log("sup", json8);
  let errors = {
    email: await validateEmail(email),
    password: await validatePassword(password),
    firstname: await validateName(firstname),
    lastname: await validateName(lastname),
    username: await validateUsername(username)
  };
  if (Object.values(errors).some(Boolean))
    return json8({
      errors,
      fields: { email, password, firstname, lastname, username },
      form: action3
    }, { status: 400 });
  console.log(Object.values(errors));
  let registered = await register({
    firstname,
    lastname,
    username,
    email,
    password
  }), generatedToken = (0, import_uuid2.v4)();
  registered && (sentMail = await sendMail({
    to: email,
    from: process.env.SENDGRID_EMAIL,
    subject: "Email Verification",
    text: `${url}/verification/${generatedToken}`,
    html: `<h1 style=" font-family: Arial, Helvetica, sans-serif; font-size: 32px;">Click on the Link below to Verify your mail</h1>
      <a href=${url}/verification/${generatedToken} style=" font-family: Arial, Helvetica, sans-serif; font-size: 22px; border:2px solid blue; border-radius:5px; padding:5px"> Click to Verify</a>
      <div style="margin-top:40px">
      <h3>QuickLook.me</h3>
      <span>Describing you with just one link</span></div>`
  }));
  let user = await findUserByEmail(email);
  return await createUserVerificationToken(user.id, generatedToken), createUserSession(user.id, "/confirmemail");
};
function SignUp() {
  let validate = Yup3.object({
    firstName: Yup3.string().max(15, "Must be 15 characters or less").required("Required"),
    lastName: Yup3.string().max(20, "Must be 20 characters or less").required("Required"),
    profileId: Yup3.string().required("Required"),
    email: Yup3.string().email("Email is invalid").required("Email is required"),
    password: Yup3.string().min(4, "Your Password must not be less than 4 characters.").required("Password is required"),
    confirmPassword: Yup3.string().oneOf([Yup3.ref("password"), null], "Password must match").required("Confirm password is required")
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "sm:mx-auto sm:w-full sm:max-w-md"
  }, /* @__PURE__ */ React.createElement("img", {
    src: quicklook_icon_default,
    alt: "",
    className: "mx-auto h-20 w-auto"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-4 text-center text-3xl font-[750] text-gray-900"
  }, "Create new account"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-center text-sm"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom5.Link, {
    to: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "No credit card required. Starting with free plan."))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-4 sm:mx-auto sm:w-full sm:max-w-md"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "bg-white py-8 px-4 sm:rounded-lg sm:px-10"
  }, /* @__PURE__ */ React.createElement(import_formik4.Formik, {
    initialValues: {
      firstName: "",
      lastName: "",
      profileId: "quicklook.me/",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: validate,
    onSubmit: (values) => {
    }
  }, (formik) => /* @__PURE__ */ React.createElement(import_react8.Form, {
    className: "space-y-4",
    method: "post",
    noValidate: !0
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mt-1 grid grid-cols-2 gap-2"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3",
    type: "firstName",
    name: "firstName",
    label: "First Name"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3",
    type: "lastName",
    name: "lastName",
    label: "Last Name"
  }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3",
    type: "profileId",
    name: "profileId",
    label: "Choose your Profile ID"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3",
    type: "email",
    name: "email",
    label: "Email address"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3",
    type: "password",
    name: "password",
    label: "Password"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-3",
    type: "password",
    name: "confirmPassword",
    label: "Confirm Password"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-5"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute left-0 inset-y-0 flex items-center pl-3"
  }, /* @__PURE__ */ React.createElement(import_solid4.LockClosedIcon, {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
    "aria-hidden": "true"
  })), "Create New Account"))))))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\login\index.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login
});
var import_solid5 = require("@heroicons/react/solid"), import_node8 = require("@remix-run/node"), import_formik5 = require("formik"), import_react_router_dom6 = require("react-router-dom"), Yup4 = __toESM(require("yup"));
var import_react9 = require("@remix-run/react"), action4 = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), errors = {
    email: await validateEmail(email),
    password: await validatePassword(password)
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node8.json)({ errors, fields: { email, password }, form: action4 }, { status: 400 });
  let user = await login({ email, password });
  return createUserSession(user.id, "/dashboard");
};
function Login() {
  let navigate = (0, import_react_router_dom6.useNavigate)(), validate = Yup4.object().shape({
    email: Yup4.string().email("Email is invalid").required("Email is required").matches(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, "Email is invalid"),
    password: Yup4.string().required("Password is required").min(4, "Your Password must not be less than 4 characters.")
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-md w-full space-y-8"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    src: quicklook_icon_default,
    alt: "",
    className: "mx-auto h-20 w-auto"
  }), /* @__PURE__ */ React.createElement("h2", {
    className: "mt-6 text-center text-3xl font-[750] text-gray-900"
  }, "Sign in to your account")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 space-y-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-md shadow-sm -space-y-px"
  }, /* @__PURE__ */ React.createElement(import_formik5.Formik, {
    initialValues: {
      email: "",
      password: "",
      remember_me: !1
    },
    validationSchema: validate,
    onSubmit: (e) => {
      e.preventDefault();
      let data = new FormData(e.currentTarget), actualData = {
        email: data.get("email"),
        password: data.get("password")
      };
      if (actualData.email && actualData.password)
        console.log(actualData), navigate("/dashboard");
      else
        return "Error";
    }
  }, (formik) => /* @__PURE__ */ React.createElement(import_react9.Form, {
    className: "space-y-4",
    method: "post",
    noValidate: !0
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    type: "email",
    name: "email",
    placeholder: "Email address"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormikInput, {
    className: "appearance-none rounded-none relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",
    type: "password",
    name: "password",
    placeholder: "Password"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center mt-3.5 font-semibold"
  }, /* @__PURE__ */ React.createElement(FormikCheckbox, {
    type: "checkbox",
    name: "rememberMe",
    label: "Remember Me",
    className: "h-4 w-4 text-gray-900 focus:ring-indigo-500 border-gray-300 rounded ml-2 block text-sm"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "text-sm mt-3.5"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom6.Link, {
    to: "/forgot-password",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Forgot your password?"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute left-0 inset-y-0 flex items-center pl-3"
  }, /* @__PURE__ */ React.createElement(import_solid5.LockClosedIcon, {
    className: "h-5 w-5 text-indigo-500 group-hover:text-indigo-400",
    "aria-hidden": "true"
  })), "Sign in")), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-center text-sm"
  }, /* @__PURE__ */ React.createElement(import_react_router_dom6.Link, {
    to: "#",
    className: "font-medium text-indigo-600 hover:text-indigo-500"
  }, "Did not receive confirmation email?"))))))))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\terms\index.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => terms
});
var import_react10 = require("@remix-run/react");
function terms() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow w-full max-w-7xl mx-auto xl:px-8 xl:flex min-h-full py-10 -mb-32"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 bg-white xl:flex "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "b xl:flex-shrink-0 xl:w-64 bg-white h-full"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-full relative "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-0 border-gray-200 rounded-lg "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-base font-extrabold py-2 sm:tracking-tight "
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-400"
  }, "CONTACT US")), /* @__PURE__ */ React.createElement("h3", {
    className: "text-sm font-semibold text-gray-500 "
  }, "Send us an email", /* @__PURE__ */ React.createElement("br", null), "abc@email.com")))))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white lg:min-w-0 lg:flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " py-6 px-4 sm:px-6 lg:px-8 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " h-full "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " relative inset-0 border-gray-200 rounded-lg"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-extrabold py-4 sm:text-5xl sm:tracking-tight"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "text-gray-900"
  }, "Terms and Conditions")), /* @__PURE__ */ React.createElement("h2", {
    className: "text-lg font-semibold text-gray-800 mt-6 ml-2"
  }, "Last updated: 29/06/2022", " "), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "1. Agreement to terms"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, 'These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (\u201Cyou\u201D) and Crownstack ("Company", \u201Cwe\u201D, \u201Cus\u201D, or \u201Cour\u201D), concerning your access to and use of the https://skia.me website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the \u201CSite\u201D). You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY. Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the \u201CLast updated\u201D date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted. The information provided on the Site is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Site from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable. The Site is not tailored to comply with industry-specific regulations (Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use this Site. You may not use the Site in a way that would violate the Gramm-Leach-Bliley Act (GLBA). The Site is intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Site.'), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "2. Intellectual property rights"), /* @__PURE__ */ React.createElement("p", null, "Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the \u201CContent\u201D) and the trademarks, service marks, and logos contained therein (the \u201CMarks\u201D) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site \u201CAS IS\u201D for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission. Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "3. User representations"), /* @__PURE__ */ React.createElement("p", null, "By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation. If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof)."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "4. User registration"), /* @__PURE__ */ React.createElement("p", null, "You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "5. Fees and payment"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-5 text-base text-gray-800"
  }, "We accept payment through Stripe and all the payment methods enabled by stripe are valid. You may be required to purchase or pay a fee to access some of our services. You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. We bill you through an online billing account for purchases made via the Site. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars. You agree to pay all charges or fees at the prices then in effect for your purchases, and you authorize us to charge your chosen payment provider for any such amounts upon making your purchase. If your purchase is subject to recurring charges, then you consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until you notify us of your cancellation. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment. We also reserve the right to refuse any order placed through the Site."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, "6. Cancellation"), /* @__PURE__ */ React.createElement("p", null, "All purchases are non-refundable. You can cancel your subscription at any by sending us an email at admin@skia.me or from your accout itself under billing settings. Your cancellation will take effect at the end of the current paid term. If you are unsatisfied with our services, please email us at admin@skia.me."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6"
  }, "7. Prohibited activities"), /* @__PURE__ */ React.createElement("p", null, "You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to: 1. Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses. 2. Use a buying agent or purchasing agent to make purchases on the Site. 3. Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein. 4. Engage in unauthorized framing of or linking to the Site. 5. Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords. 6. Make improper use of our support services or submit false reports of abuse or misconduct. 7. Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools. 8. Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site. 9. Attempt to impersonate another user or person or use the username of another user. 10. Sell or otherwise transfer your profile. 11. Use any information obtained from the Site in order to harass, abuse, or harm another person. 12. Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for any revenue-generating endeavor or commercial enterprise. 13. Decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Site. 14. Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any portion of the Site. 15. Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Site to you. 16. Delete the copyright or other proprietary rights notice from any Content. 17. Copy or adapt the Site\u2019s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code. 18. Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party\u2019s uninterrupted use and enjoyment of the Site or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Site. 19. Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats (\u201Cgifs\u201D), 1\xD71 pixels, web bugs, cookies, or other similar devices (sometimes referred to as \u201Cspyware\u201D or \u201Cpassive collection mechanisms\u201D or \u201Cpcms\u201D). 20. Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Site, or using or launching any unauthorized script or other software. 21. Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site. 22. Use the Site in a manner inconsistent with any applicable laws or regulations."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6"
  }, "8. User generated contributions"), /* @__PURE__ */ React.createElement("p", null, 'The Site does not offer users to submit or post content to public. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit may be treated in accordance with the Site Privacy Policy. When you create or make available any Contributions, you thereby represent and warrant that:1. The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.2. You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in any manner contemplated by the Site and these Terms of Use.3. You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these Terms of Use.4. Your Contributions are not false, inaccurate, or misleading.5. Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.6. Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).7. Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.8. Your Contributions do not advocate the violent overthrow of any government or incite, encourage, or threaten physical harm against another.9. Your Contributions do not violate any applicable law, regulation, or rule.10. Your Contributions do not violate the privacy or publicity rights of any third party.11. Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.12. Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.13. Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.14. Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other things, termination or suspension of your rights to use the Site.'), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6"
  }, "9. Contribution license"), /* @__PURE__ */ React.createElement("p", null, "You and the Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "10. Submissions"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, 'You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and you hereby warrant that any such Submissions are original with you or that you have the right to submit such Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or misappropriation of any proprietary right in your Submissions.'), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "11. Third-party website and content"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, 'The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Site or relating to any applications you use or install from the Site. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.'), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "12. Site management"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the Site."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "13. Privacy Policy"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "We care about data privacy and security. Please review our Privacy Policy: https://www.skia.me/privacy. By using the Site, you agree to be bound by our Privacy Policy, which is incorporated into these Terms of Use. Please be advised the Site is hosted on Render. If you access the Site from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in the Netherlands, then through your continued use of the Site, you are transferring your data to the Render, and you agree to have your data transferred to and processed via Render."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "14. Term and termination"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION. If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "15. Modifications and interruptions"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Site. We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to supply any corrections, updates, or releases in connection therewith."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "16. Governing law"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "These conditions are governed by and interpreted following the laws of India, and the use of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded. If your habitual residence is in the EU, and you are a consumer, you additionally possess the protection provided to you by obligatory provisions of the law of your country of residence. Skia and yourself both agree to submit to the non-exclusive jurisdiction of the courts of New Delhi, which means that you may make a claim to defend your consumer protection rights in regards to these Conditions of Use in Belgium, or in the EU country in which you reside."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "17. Dispute resolution"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, 'Informal Negotiations To expedite resolution and control the cost of any dispute, controversy, or claim related to these Terms of Use (each a "Dispute" and collectively, the \u201CDisputes\u201D) brought by either you or us (individually, a \u201CParty\u201D and collectively, the \u201CParties\u201D), the Parties agree to first attempt to negotiate any Dispute (except those Disputes expressly provided below) informally for at least thirty (30) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party. Jurisdiction The parties agree that all disputes which need to be settled in court, should fall within the jurisdiction of the courts located in New Delhi, India. Restrictions The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons. Exceptions to Informal Negotiations and Arbitration The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to submit to the personal jurisdiction of that court.'), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "18. Corrections"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "There may be information on the Site that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Site at any time, without prior notice."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "19. Disclaimer"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE\u2019S CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "20. Limitations of liability"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE THREE (3) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "21. Indemnification"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys\u2019 fees and expenses, made by any third party due to or arising out of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "22. User data"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "We will maintain certain data that you transmit to the Site for the purpose of managing the performance of the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "23. Electronic communications, transactions, and signatures"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Site, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "24. Miscellaneous"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to execute these Terms of Use."), /* @__PURE__ */ React.createElement("h2", {
    className: "text-2xl font-semibold text-gray-800 mt-6 "
  }, " ", "25. Contact us"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 text-base text-gray-800"
  }, "In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: admin@skia.me"))))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "block"
  }, "Ready to dive in?"), /* @__PURE__ */ React.createElement("span", {
    className: "block text-indigo-600"
  }, "Start your free trial today.")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-8 flex lg:mt-0 lg:flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "inline-flex rounded-md shadow"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/signup",
    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
  }, "Get started")), /* @__PURE__ */ React.createElement("div", {
    className: "ml-3 inline-flex rounded-md shadow"
  }, /* @__PURE__ */ React.createElement(import_react10.Link, {
    to: "#",
    className: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
  }, "Learn more"))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between bg-gray-800 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex space-x-6 text-white mx-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/terms"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Terms & Conditions"))), /* @__PURE__ */ React.createElement("a", {
    href: "/privacy"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Privacy Policy"))), /* @__PURE__ */ React.createElement("a", {
    href: "/refund"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "group"
  }, /* @__PURE__ */ React.createElement("span", null, " Refund Policy ")))), /* @__PURE__ */ React.createElement("p", {
    className: "mt-6 text-sm text-slate-500 sm:mt-0 ml-2"
  }, "Copyright @2022 Crownstack Technologies. All rights reserved reserved.")));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Home
});

// assets/images/background-call-to-action.jpg
var background_call_to_action_default = "/build/_assets/background-call-to-action-NJNFM4WW.jpg";

// app/components/CallToAction.tsx
function CallToAction() {
  return /* @__PURE__ */ React.createElement("section", {
    id: "get-started-today",
    className: "relative overflow-hidden bg-blue-600 py-32 text-xl font-medium"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: background_call_to_action_default,
    alt: "",
    width: 2347,
    height: 1244,
    style: {
      position: "absolute",
      inset: " 0px",
      padding: 0,
      border: "none",
      margin: "auto",
      display: "block",
      width: 0,
      height: 0
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-lg text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "font-display text-3xl tracking-tight text-white sm:text-4xl"
  }, "Get started today"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-lg tracking-tight text-white"
  }, "Create one link to connect all your social profile and get discovered ."), /* @__PURE__ */ React.createElement("button", {
    className: "group inline-flex items-center justify-center rounded-full py-2 px-4  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10 font-medium text-lg"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/signup"
  }, "Get Started for free")))));
}

// assets/images/background-faqs.jpg
var background_faqs_default = "/build/_assets/background-faqs-KXJOG2UV.jpg";

// app/components/Faqs.tsx
var faqs = [
  [
    {
      question: "Does TaxPal handle VAT?",
      answer: "Well no, but if you move your company offshore you can probably ignore it."
    },
    {
      question: "Can I pay for my subscription via purchase order?",
      answer: "Absolutely, we are happy to take your money in all forms."
    },
    {
      question: "How do I apply for a job at TaxPal?",
      answer: "We only hire our customers, so subscribe for a minimum of 6 months and then let\u2019s talk."
    }
  ],
  [
    {
      question: "What was that testimonial about tax fraud all about?",
      answer: "TaxPal is just a software application, ultimately your books are your responsibility."
    },
    {
      question: "TaxPal sounds horrible but why do I still feel compelled to purchase?",
      answer: "This is the power of excellent visual design. You just can\u2019t resist it, no matter how poorly it actually functions."
    },
    {
      question: "I found other companies called TaxPal, are you sure you can use this name?",
      answer: "Honestly not sure at all. We haven\u2019t actually incorporated or anything, we just thought it sounded cool and made this website."
    }
  ],
  [
    {
      question: "How do you generate reports?",
      answer: "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons."
    },
    {
      question: "Can we expect more inventory features?",
      answer: "In life it\u2019s really better to never expect anything at all."
    },
    {
      question: "I lost my password, how do I get into my account?",
      answer: "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information."
    }
  ]
];
function Faqs() {
  return /* @__PURE__ */ React.createElement("section", {
    id: "faq",
    "aria-labelledby": "faq-title",
    className: "relative overflow-hidden bg-slate-50 py-20 sm:py-32 text-xl font-medium"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "faq-title",
    className: "sr-only"
  }, "Frequently asked questions"), /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: background_faqs_default,
    alt: "sad",
    width: 1558,
    height: 946
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl lg:mx-0"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
  }, "Frequently asked questions"), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-lg tracking-tight text-slate-700"
  }, "If you can\u2019t find what you\u2019re looking for, email our support team and if you\u2019re lucky someone will get back to you.")), /* @__PURE__ */ React.createElement("ul", {
    className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
  }, faqs.map((column, columnIndex) => /* @__PURE__ */ React.createElement("li", {
    key: columnIndex
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-8"
  }, column.map((faq, faqIndex) => /* @__PURE__ */ React.createElement("li", {
    key: faqIndex
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "font-display text-lg leading-7 text-slate-900"
  }, faq.question), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-sm text-slate-700"
  }, faq.answer)))))))));
}

// app/components/Hero.tsx
function Hero() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32 font-medium"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl"
  }, "Introductions", " ", /* @__PURE__ */ React.createElement("span", {
    className: "relative whitespace-nowrap text-blue-600"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 418 42",
    className: "absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70",
    preserveAspectRatio: "none"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "relative"
  }, "made simple ")), " ", "with just one link."), /* @__PURE__ */ React.createElement("p", {
    className: "mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700"
  }, "Describe yourself with just one link which connects all your social profile together."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 flex justify-center space-x-6"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-500 text-white hover:bg-blue-600 hover:text-slate-100 active:bg-blue-800 active:text-slate-300 focus-visible:outline-black"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/signup"
  }, "Get Started For Free"))));
}

// app/components/Pricing.tsx
var import_clsx = __toESM(require("clsx"));
function Plan({
  name,
  price,
  description,
  href,
  features: features3,
  featured = !1
}) {
  return /* @__PURE__ */ React.createElement("section", {
    className: (0, import_clsx.default)("flex flex-col rounded-3xl px-6 sm:px-8", {
      "order-first bg-blue-600 py-8 lg:order-none": featured,
      "lg:py-8": !featured
    })
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mt-5 font-display text-lg text-white"
  }, name), /* @__PURE__ */ React.createElement("p", {
    className: (0, import_clsx.default)("mt-2 text-base", {
      "text-white": featured,
      "text-slate-400": !featured
    })
  }, description), /* @__PURE__ */ React.createElement("p", {
    className: "order-first font-display text-5xl font-light tracking-tight text-white"
  }, price), /* @__PURE__ */ React.createElement("ul", {
    className: (0, import_clsx.default)("order-last mt-10 space-y-3 text-sm", {
      "text-white": featured,
      "text-slate-200": !featured
    })
  }, features3.map((feature) => /* @__PURE__ */ React.createElement("li", {
    key: feature,
    className: "flex"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    className: (0, import_clsx.default)("h-6 w-6 flex-none", {
      "fill-white stroke-white": featured,
      "fill-slate-400 stroke-slate-400": !featured
    })
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z",
    strokeWidth: 0
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 8.25,
    fill: "none",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "ml-4"
  }, feature)))), /* @__PURE__ */ React.createElement("a", {
    href: "/signup",
    className: (0, import_clsx.default)(" mt-10 space-y-3 text-sm", {
      "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-8": featured,
      "group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white mt-8": !featured
    }),
    "aria-label": `Get started with ${name} plan for ${price}`
  }, "Get started"));
}
function Pricing() {
  return /* @__PURE__ */ React.createElement("section", {
    id: "pricing",
    "aria-labelledby": "pricing-title",
    className: "bg-slate-900 py-20 sm:py-32"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "pricing-title",
    className: "sr-only"
  }, "Pricing"), /* @__PURE__ */ React.createElement("div", {
    className: "text-xl font-med mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:text-center"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "font-display text-3xl tracking-tight text-white sm:text-4xl"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "relative whitespace-nowrap"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 281 40",
    className: "absolute top-1/2 left-0 h-[1em] w-full fill-blue-400",
    preserveAspectRatio: "none"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "relative"
  }, "Simple pricing,")), " ", "for everyone."), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-lg text-slate-400"
  }, "Pay once and get a life time access to all features. No pay per month setup.")), /* @__PURE__ */ React.createElement("div", {
    className: "-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-2 xl:mx-0 xl:gap-x-8"
  }, /* @__PURE__ */ React.createElement(Plan, {
    name: "Starter",
    price: "free",
    description: "Good for anyone who wants just a basic link to combine all their social profile",
    href: "/register",
    features: [
      "Send 10 quotes and invoices",
      "Connect up to 2 bank accounts",
      "Track up to 15 expenses per month",
      "Manual payroll support",
      "Export up to 3 reports"
    ]
  }), /* @__PURE__ */ React.createElement(Plan, {
    featured: !0,
    name: "Full Access",
    price: "$49",
    description: "Everything in Free plan and all advance features.",
    href: "/register",
    features: [
      "Send 25 quotes and invoices",
      "Connect up to 5 bank accounts",
      "Track up to 50 expenses per month",
      "Automated payroll support",
      "Export up to 12 reports",
      "Bulk reconcile transactions",
      "Track in multiple currencies"
    ]
  }))));
}

// app/components/PrimaryFeatures.tsx
var import_react11 = require("react"), import_react12 = require("@headlessui/react");

// assets/images/background-features.jpg
var background_features_default = "/build/_assets/background-features-L55JVSLL.jpg";

// assets/images/screenshots/expenses.png
var expenses_default = "/build/_assets/expenses-H4ZRSGOF.png";

// assets/images/screenshots/payroll.png
var payroll_default = "/build/_assets/payroll-KF5PJZ6V.png";

// assets/images/screenshots/reporting.png
var reporting_default = "/build/_assets/reporting-FLLPAZOZ.png";

// assets/images/screenshots/vat-returns.png
var vat_returns_default = "/build/_assets/vat-returns-OQBIED5B.png";

// app/components/PrimaryFeatures.tsx
var import_clsx2 = __toESM(require("clsx")), features = [
  {
    title: "Payroll",
    description: "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image: payroll_default
  },
  {
    title: "Claim expenses",
    description: "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image: expenses_default
  },
  {
    title: "VAT handling",
    description: "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image: vat_returns_default
  },
  {
    title: "Reporting",
    description: "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    image: reporting_default
  }
];
function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = (0, import_react11.useState)("horizontal");
  return (0, import_react11.useEffect)(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)");
    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? "vertical" : "horizontal");
    }
    return onMediaQueryChange(lgMediaQuery), lgMediaQuery.addEventListener("change", onMediaQueryChange), () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange);
    };
  }, []), /* @__PURE__ */ React.createElement("section", {
    id: "features",
    "aria-labelledby": "features-title",
    className: "relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32 text-xl font-medium"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute top-1/2 left-1/2 -translate-x-[44%] -translate-y-[42%]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: background_features_default,
    alt: "",
    width: 2245,
    height: 1636
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-2xl md:mx-auto md:text-center xl:max-w-none"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "features-title",
    className: "font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl"
  }, "Everything you need to run your books."), /* @__PURE__ */ React.createElement("p", {
    className: "mt-6 text-lg tracking-tight text-blue-100"
  }, "Well everything you need if you aren\u2019t that picky about minor details like tax compliance.")), /* @__PURE__ */ React.createElement(import_react12.Tab.Group, {
    as: "div",
    className: "mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0",
    vertical: tabOrientation === "vertical"
  }, ({ selectedIndex }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5"
  }, /* @__PURE__ */ React.createElement(import_react12.Tab.List, {
    className: "relative z-10 flex space-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:space-y-1 lg:space-x-0 lg:whitespace-normal"
  }, features.map((feature, featureIndex) => /* @__PURE__ */ React.createElement("div", {
    key: feature.title,
    className: (0, import_clsx2.default)("group outline-none relative rounded-full py-1 px-4 lg:rounded-r-none lg:rounded-l-xl lg:p-6 ", {
      "bg-white lg:bg-white/10 ": selectedIndex === featureIndex,
      "hover:bg-white/10 lg:hover:bg-white/5": selectedIndex !== featureIndex
    })
  }, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement(import_react12.Tab, {
    className: (0, import_clsx2.default)("font-display text-lg outline-none", {
      "text-blue-600 lg:text-white": selectedIndex === featureIndex,
      "text-blue-100 hover:text-white lg:text-white": selectedIndex !== featureIndex
    })
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute outline-none inset-0 rounded-full lg:rounded-r-none lg:rounded-l-xl"
  }), feature.title)), /* @__PURE__ */ React.createElement("p", {
    className: (0, import_clsx2.default)("mt-2 hidden text-sm lg:block", {
      "text-white": selectedIndex === featureIndex,
      "text-blue-100 group-hover:text-white": selectedIndex !== featureIndex
    })
  }, feature.description))))), /* @__PURE__ */ React.createElement(import_react12.Tab.Panels, {
    className: "lg:col-span-7"
  }, features.map((feature) => /* @__PURE__ */ React.createElement(import_react12.Tab.Panel, {
    key: feature.title,
    unmount: !1
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative sm:px-6 lg:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute -inset-x-4 -top-[6.5rem] -bottom-[4.25rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"
  }), /* @__PURE__ */ React.createElement("p", {
    className: "relative mx-auto max-w-2xl text-base text-white sm:text-center"
  }, feature.description)), /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-10 aspect-[1085/730] w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
  }, /* @__PURE__ */ React.createElement("img", {
    src: feature.image,
    alt: "as",
    sizes: "(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem",
    className: "object-fill "
  })))))))));
}

// app/components/SecondaryFeatures.tsx
var import_react13 = require("@headlessui/react");

// assets/images/screenshots/contacts.png
var contacts_default = "/build/_assets/contacts-UYO45FPD.png";

// assets/images/screenshots/inventory.png
var inventory_default = "/build/_assets/inventory-CTWHOWGT.png";

// assets/images/screenshots/profit-loss.png
var profit_loss_default = "/build/_assets/profit-loss-FIXYLVLT.png";

// app/components/SecondaryFeatures.tsx
var import_clsx3 = __toESM(require("clsx")), features2 = [
  {
    name: "Reporting",
    summary: "Stay on top of things with always up-to-date reporting features.",
    description: "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
    image: profit_loss_default,
    icon: function() {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
        opacity: ".5",
        d: "M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z",
        fill: "#fff"
      }), /* @__PURE__ */ React.createElement("path", {
        opacity: ".3",
        d: "M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z",
        fill: "#fff"
      }), /* @__PURE__ */ React.createElement("path", {
        d: "M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z",
        fill: "#fff"
      }));
    }
  },
  {
    name: "Inventory",
    summary: "Never lose track of what\u2019s in stock with accurate inventory tracking.",
    description: "We don\u2019t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
    image: inventory_default,
    icon: function() {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
        opacity: ".5",
        d: "M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z",
        fill: "#fff"
      }), /* @__PURE__ */ React.createElement("path", {
        opacity: ".3",
        d: "M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z",
        fill: "#fff"
      }), /* @__PURE__ */ React.createElement("path", {
        d: "M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z",
        fill: "#fff"
      }));
    }
  },
  {
    name: "Contacts",
    summary: "Organize all of your contacts, service providers, and invoices in one place.",
    description: "This also isn\u2019t actually a feature, it\u2019s just some friendly advice. We definitely recommend that you do this, you\u2019ll feel really organized and professional.",
    image: contacts_default,
    icon: function() {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("path", {
        opacity: ".5",
        d: "M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z",
        fill: "#fff"
      }), /* @__PURE__ */ React.createElement("path", {
        d: "M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z",
        fill: "#fff"
      }));
    }
  }
];
function Feature(_a) {
  var _b = _a, { feature, isActive, className } = _b, props = __objRest(_b, ["feature", "isActive", "className"]);
  return /* @__PURE__ */ React.createElement("div", __spreadValues({
    className: (0, import_clsx3.default)(className, {
      "opacity-75 outline-none hover:opacity-100": !isActive
    })
  }, props), /* @__PURE__ */ React.createElement("div", {
    className: (0, import_clsx3.default)("w-9 rounded-lg outline-none", {
      "bg-blue-600": isActive,
      "bg-slate-500": !isActive
    })
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    className: "h-9 w-9 outline-none",
    fill: "none"
  }, /* @__PURE__ */ React.createElement(feature.icon, null))), /* @__PURE__ */ React.createElement("h3", {
    className: (0, import_clsx3.default)("mt-6 text-sm font-medium outline-none", {
      "text-blue-600 outline-none": isActive,
      "text-slate-600": !isActive
    })
  }, feature.name), /* @__PURE__ */ React.createElement("p", {
    className: "mt-2 outline-none font-display text-xl text-slate-900"
  }, feature.summary), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-sm text-slate-600 outline-none"
  }, feature.description));
}
function FeaturesMobile() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden"
  }, features2.map((feature) => /* @__PURE__ */ React.createElement("div", {
    key: feature.name
  }, /* @__PURE__ */ React.createElement(Feature, {
    feature,
    className: "mx-auto max-w-2xl ",
    isActive: !0
  }), /* @__PURE__ */ React.createElement("div", {
    className: "relative mt-10 pb-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: feature.image,
    alt: "",
    className: "object-fill"
  }))))));
}
function FeaturesDesktop() {
  return /* @__PURE__ */ React.createElement(import_react13.Tab.Group, {
    as: "div",
    className: "hidden lg:mt-20 lg:block outline-none"
  }, ({ selectedIndex }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react13.Tab.List, {
    className: "grid grid-cols-3 gap-x-8 outline-none"
  }, features2.map((feature, featureIndex) => /* @__PURE__ */ React.createElement(Feature, {
    key: feature.name,
    feature: __spreadProps(__spreadValues({}, feature), {
      name: /* @__PURE__ */ React.createElement(import_react13.Tab, {
        className: "outline-none"
      }, /* @__PURE__ */ React.createElement("span", {
        className: "absolute inset-0 outline-none"
      }), feature.name)
    }),
    isActive: featureIndex === selectedIndex,
    className: "relative"
  }))), /* @__PURE__ */ React.createElement(import_react13.Tab.Panels, {
    className: "relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "-mx-5 flex"
  }, features2.map((feature, featureIndex) => /* @__PURE__ */ React.createElement(import_react13.Tab.Panel, {
    static: !0,
    key: feature.name,
    className: (0, import_clsx3.default)("px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none", {
      "opacity-60": featureIndex !== selectedIndex
    }),
    style: { transform: `translateX(-${selectedIndex * 100}%)` },
    "aria-hidden": featureIndex !== selectedIndex
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"
  }, /* @__PURE__ */ React.createElement("img", {
    src: feature.image,
    alt: "",
    className: "object-fill"
  }))))), /* @__PURE__ */ React.createElement("div", {
    className: "pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10"
  }))));
}
function SecondaryFeatures() {
  return /* @__PURE__ */ React.createElement("section", {
    id: "secondary-features",
    "aria-labelledby": "secondary-features-title",
    className: "pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32 text-xl font-medium outline-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl md:text-center"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "secondary-features-title",
    className: "font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
  }, "Simplify everyday business tasks."), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-lg tracking-tight text-slate-700"
  }, "Because you\u2019d probably be a little confused if we suggested you complicate your everyday business tasks instead.")), /* @__PURE__ */ React.createElement(FeaturesMobile, null), /* @__PURE__ */ React.createElement(FeaturesDesktop, null)));
}

// assets/images/avatars/avatar-1.png
var avatar_1_default = "/build/_assets/avatar-1-Y6DBNN5Z.png";

// assets/images/avatars/avatar-2.png
var avatar_2_default = "/build/_assets/avatar-2-Y4XFUQA3.png";

// assets/images/avatars/avatar-3.png
var avatar_3_default = "/build/_assets/avatar-3-5KU6632L.png";

// assets/images/avatars/avatar-4.png
var avatar_4_default = "/build/_assets/avatar-4-C22OFHQT.png";

// assets/images/avatars/avatar-5.png
var avatar_5_default = "/build/_assets/avatar-5-4737V4SM.png";

// app/components/Testimonials.tsx
var testimonials = [
  [
    {
      content: "TaxPal is so easy to use I can\u2019t help but wonder if it\u2019s really doing the things the government expects me to do.",
      author: {
        name: "Sheryl Berge",
        role: "CEO at Lynch LLC",
        image: avatar_1_default
      }
    },
    {
      content: "I\u2019m trying to get a hold of someone in support, I\u2019m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: avatar_4_default
      }
    }
  ],
  [
    {
      content: "The best part about TaxPal is every time I pay my employees, my bank balance doesn\u2019t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      author: {
        name: "Leland Kiehn",
        role: "Founder of Kiehn and Sons",
        image: avatar_5_default
      }
    },
    {
      content: "There are so many things I had to do with my old software that I just don\u2019t do at all with TaxPal. Suspicious but I can\u2019t say I don\u2019t love it.",
      author: {
        name: "Erin Powlowski",
        role: "COO at Armstrong Inc",
        image: avatar_2_default
      }
    }
  ],
  [
    {
      content: "I used to have to remit tax to the EU and with TaxPal I somehow don\u2019t have to do that anymore. Nervous to travel there now though.",
      author: {
        name: "Peter Renolds",
        role: "Founder of West Inc",
        image: avatar_3_default
      }
    },
    {
      content: "This is the fourth email I\u2019ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      author: {
        name: "Amy Hahn",
        role: "Director at Velocity Industries",
        image: avatar_4_default
      }
    }
  ]
];
function Testimonials() {
  return /* @__PURE__ */ React.createElement("section", {
    id: "testimonials",
    "aria-labelledby": "testimonials-title",
    className: "bg-slate-50 py-20 sm:py-32 text-2xl font-medium"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-2xl md:text-center text-2xl font-medium"
  }, /* @__PURE__ */ React.createElement("h2", {
    id: "testimonials-title",
    className: "font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
  }, "Loved by businesses worldwide."), /* @__PURE__ */ React.createElement("p", {
    className: "mt-4 text-lg tracking-tight text-slate-700"
  }, "Our software is so simple that people can\u2019t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.")), /* @__PURE__ */ React.createElement("ul", {
    className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
  }, testimonials.map((column, columnIndex) => /* @__PURE__ */ React.createElement("li", {
    key: columnIndex
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "space-y-6 sm:space-y-8"
  }, column.map((testimonial, testimonialIndex) => /* @__PURE__ */ React.createElement("li", {
    key: testimonialIndex
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    width: 105,
    height: 78,
    className: "absolute top-6 left-6 fill-slate-100"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"
  })), /* @__PURE__ */ React.createElement("blockquote", {
    className: "relative"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "text-lg tracking-tight text-slate-900"
  }, testimonial.content)), /* @__PURE__ */ React.createElement("figcaption", {
    className: "relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "font-display text-base text-slate-900"
  }, testimonial.author.name), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1 text-sm text-slate-500"
  }, testimonial.author.role)), /* @__PURE__ */ React.createElement("div", {
    className: "h-14 w-14 overflow-hidden rounded-full bg-slate-50"
  }, /* @__PURE__ */ React.createElement("img", {
    src: testimonial.author.image,
    alt: ""
  }))))))))))));
}

// app/components/Header.tsx
var import_react14 = require("react"), import_react15 = require("@headlessui/react");
var import_clsx4 = __toESM(require("clsx"));
function MobileNavigation() {
  return /* @__PURE__ */ React.createElement(import_react15.Popover, null, ({ open, close }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(import_react15.Popover.Button, {
    className: "relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Toggle Navigation"), /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    className: "h-3.5 w-3.5 overflow-visible stroke-slate-700",
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M0 1H14M0 7H14M0 13H14",
    className: (0, import_clsx4.default)("origin-center transition", {
      "scale-90 opacity-0": open
    })
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M2 2L12 12M12 2L2 12",
    className: (0, import_clsx4.default)("origin-center transition", {
      "scale-90 opacity-0": !open
    })
  }))), /* @__PURE__ */ React.createElement(import_react15.Transition.Root, null, /* @__PURE__ */ React.createElement(import_react15.Transition.Child, {
    as: import_react14.Fragment,
    enter: "duration-150 ease-out",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "duration-150 ease-in",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /* @__PURE__ */ React.createElement(import_react15.Popover.Overlay, {
    className: "fixed inset-0 bg-slate-300/50"
  })), /* @__PURE__ */ React.createElement(import_react15.Transition.Child, {
    as: import_react14.Fragment,
    enter: "duration-150 ease-out",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "duration-100 ease-in",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react15.Popover.Panel, {
    as: "ul",
    className: "absolute inset-x-0 top-full mt-4 origin-top space-y-4 rounded-2xl bg-white p-6 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#features",
    className: "block w-full",
    onClick: () => close()
  }, "Features")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#testimonials",
    className: "block w-full",
    onClick: () => close()
  }, "Testimonials")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#pricing",
    className: "block w-full",
    onClick: () => close()
  }, "Pricing")), /* @__PURE__ */ React.createElement("li", {
    className: "border-t border-slate-300/40 pt-4  font-medium"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/login"
  }, "Login ")))))));
}
function Header() {
  return /* @__PURE__ */ React.createElement("header", {
    className: "py-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "relative z-50 text-md"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "/#",
    className: "flex items-center gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    src: quicklook_icon_default,
    alt: "hello",
    className: "h-12 w-12"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "font-medium"
  }, "QuickLook.me"))), /* @__PURE__ */ React.createElement("li", {
    className: "ml-12 hidden md:block"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#features",
    className: "rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
  }, "Features")), /* @__PURE__ */ React.createElement("li", {
    className: "ml-6 hidden md:block"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#testimonials",
    className: "rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
  }, "Testimonials")), /* @__PURE__ */ React.createElement("li", {
    className: "ml-6 hidden md:block"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#pricing",
    className: "rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
  }, "Pricing")), /* @__PURE__ */ React.createElement("li", {
    className: "ml-auto hidden md:block"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/login"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "rounded-lg py-1 px-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
  }, "Login"))), /* @__PURE__ */ React.createElement("li", {
    className: "ml-auto md:ml-8"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "/signup",
    className: "group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold text-lg"
  }, "Get started", /* @__PURE__ */ React.createElement("span", {
    className: "hidden lg:inline font-semibold text-lg"
  }, " ", "today")))), /* @__PURE__ */ React.createElement("li", {
    className: "ml-5 -mr-1 md:hidden"
  }, /* @__PURE__ */ React.createElement(MobileNavigation, null))))));
}

// route:C:\Users\Tushar\office-Projects\Quicklook\app\routes\index.tsx
function Home() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header, null), /* @__PURE__ */ React.createElement(Hero, null), /* @__PURE__ */ React.createElement(PrimaryFeatures, null), /* @__PURE__ */ React.createElement(SecondaryFeatures, null), /* @__PURE__ */ React.createElement(CallToAction, null), /* @__PURE__ */ React.createElement(Testimonials, null), /* @__PURE__ */ React.createElement(Pricing, null), /* @__PURE__ */ React.createElement(Faqs, null), /* @__PURE__ */ React.createElement(Footer, null));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "fc0b65b2", entry: { module: "/build/entry.client-XMUY2SDH.js", imports: ["/build/_shared/chunk-TK6REQJU.js", "/build/_shared/chunk-V75SRAHZ.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DVUDP5B2.js", imports: ["/build/_shared/chunk-PG6GI53N.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/confirmemail/index": { id: "routes/confirmemail/index", parentId: "root", path: "confirmemail", index: !0, caseSensitive: void 0, module: "/build/routes/confirmemail/index-ZLYW5BZJ.js", imports: ["/build/_shared/chunk-VFCT7F5Y.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/confirmforgotpassword/index": { id: "routes/confirmforgotpassword/index", parentId: "root", path: "confirmforgotpassword", index: !0, caseSensitive: void 0, module: "/build/routes/confirmforgotpassword/index-45O3JAH4.js", imports: ["/build/_shared/chunk-VFCT7F5Y.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "root", path: "dashboard", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-QW327HIH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgot-password/index": { id: "routes/forgot-password/index", parentId: "root", path: "forgot-password", index: !0, caseSensitive: void 0, module: "/build/routes/forgot-password/index-4DYK2JHQ.js", imports: ["/build/_shared/chunk-H2KIWR7S.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgot-password/verification/$token": { id: "routes/forgot-password/verification/$token", parentId: "root", path: "forgot-password/verification/:token", index: void 0, caseSensitive: void 0, module: "/build/routes/forgot-password/verification/$token-R3SV3YCL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-LTHQZLMH.js", imports: ["/build/_shared/chunk-JYFR6D26.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login/index": { id: "routes/login/index", parentId: "root", path: "login", index: !0, caseSensitive: void 0, module: "/build/routes/login/index-4C7OU525.js", imports: ["/build/_shared/chunk-5CFZKEHT.js", "/build/_shared/chunk-H2KIWR7S.js", "/build/_shared/chunk-BO2MNKBI.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privacy/index": { id: "routes/privacy/index", parentId: "root", path: "privacy", index: !0, caseSensitive: void 0, module: "/build/routes/privacy/index-KEZI2V47.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/refund-policy/index": { id: "routes/refund-policy/index", parentId: "root", path: "refund-policy", index: !0, caseSensitive: void 0, module: "/build/routes/refund-policy/index-RZSJXJZA.js", imports: ["/build/_shared/chunk-JYFR6D26.js", "/build/_shared/chunk-BO2MNKBI.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup/index": { id: "routes/signup/index", parentId: "root", path: "signup", index: !0, caseSensitive: void 0, module: "/build/routes/signup/index-G2DZK7WW.js", imports: ["/build/_shared/chunk-5CFZKEHT.js", "/build/_shared/chunk-H2KIWR7S.js", "/build/_shared/chunk-BO2MNKBI.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup/verification/$token": { id: "routes/signup/verification/$token", parentId: "root", path: "signup/verification/:token", index: void 0, caseSensitive: void 0, module: "/build/routes/signup/verification/$token-IIIROTS2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/signup/verification/index": { id: "routes/signup/verification/index", parentId: "root", path: "signup/verification", index: !0, caseSensitive: void 0, module: "/build/routes/signup/verification/index-RZR2ILIZ.js", imports: ["/build/_shared/chunk-BO2MNKBI.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/successlogin/index": { id: "routes/successlogin/index", parentId: "root", path: "successlogin", index: !0, caseSensitive: void 0, module: "/build/routes/successlogin/index-RQBWO3PH.js", imports: ["/build/_shared/chunk-5CFZKEHT.js", "/build/_shared/chunk-H2KIWR7S.js", "/build/_shared/chunk-BO2MNKBI.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms/index": { id: "routes/terms/index", parentId: "root", path: "terms", index: !0, caseSensitive: void 0, module: "/build/routes/terms/index-EWBSA5XZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-FC0B65B2.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/forgot-password/verification/$token": {
    id: "routes/forgot-password/verification/$token",
    parentId: "root",
    path: "forgot-password/verification/:token",
    index: void 0,
    caseSensitive: void 0,
    module: token_exports
  },
  "routes/confirmforgotpassword/index": {
    id: "routes/confirmforgotpassword/index",
    parentId: "root",
    path: "confirmforgotpassword",
    index: !0,
    caseSensitive: void 0,
    module: confirmforgotpassword_exports
  },
  "routes/signup/verification/$token": {
    id: "routes/signup/verification/$token",
    parentId: "root",
    path: "signup/verification/:token",
    index: void 0,
    caseSensitive: void 0,
    module: token_exports2
  },
  "routes/signup/verification/index": {
    id: "routes/signup/verification/index",
    parentId: "root",
    path: "signup/verification",
    index: !0,
    caseSensitive: void 0,
    module: verification_exports
  },
  "routes/forgot-password/index": {
    id: "routes/forgot-password/index",
    parentId: "root",
    path: "forgot-password",
    index: !0,
    caseSensitive: void 0,
    module: forgot_password_exports
  },
  "routes/refund-policy/index": {
    id: "routes/refund-policy/index",
    parentId: "root",
    path: "refund-policy",
    index: !0,
    caseSensitive: void 0,
    module: refund_policy_exports
  },
  "routes/confirmemail/index": {
    id: "routes/confirmemail/index",
    parentId: "root",
    path: "confirmemail",
    index: !0,
    caseSensitive: void 0,
    module: confirmemail_exports
  },
  "routes/successlogin/index": {
    id: "routes/successlogin/index",
    parentId: "root",
    path: "successlogin",
    index: !0,
    caseSensitive: void 0,
    module: successlogin_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "root",
    path: "dashboard",
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/privacy/index": {
    id: "routes/privacy/index",
    parentId: "root",
    path: "privacy",
    index: !0,
    caseSensitive: void 0,
    module: privacy_exports
  },
  "routes/signup/index": {
    id: "routes/signup/index",
    parentId: "root",
    path: "signup",
    index: !0,
    caseSensitive: void 0,
    module: signup_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: !0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/terms/index": {
    id: "routes/terms/index",
    parentId: "root",
    path: "terms",
    index: !0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
