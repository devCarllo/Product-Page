const setCookie = async (data) => {
  document.cookie = `Token=${data}; max-age=${60 * 60 * 24}; path=/`;
};

const getCookie = () => {
  const cookie = document.cookie;

  if (cookie) {
    const cookieArray = cookie.split("=");
    return {
      [cookieArray[0]]: [cookieArray[1]],
    };
  } else {
    return false;
  }
};

export { setCookie, getCookie };
