const getAppEnv = () => {
  switch (process.env.REACT_APP_ENV) {
    case "development":
      return "development";
    case "production":
      return "production";
    default:
      return "development";
  }
};

const getAppUrl = () => {
  switch (process.env.REACT_APP_ENV) {
    case "development":
      return "http://localhost:3000/user/feedback";
    case "production":
      return "http://localhost:3000/user/feedback";
    default:
      return "http://localhost:3000/user/feedback";
  }
};

export const config = { appEnv: getAppEnv(), appUrl: getAppUrl() };
