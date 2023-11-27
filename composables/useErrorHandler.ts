export function useErrorHandler(error: any) {
  if (Array.isArray(error)) {
    error.forEach((err) => {
      iziToast.error({
        title: "ERROR",
        message: err.msg,
        position: "topRight",
      });
    });
  } else {
    iziToast.error({
      title: "ERROR",
      message: error.message,
      position: "topRight",
    });
  }
}
