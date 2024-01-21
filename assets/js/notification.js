import iziToast from "izitoast";

export function SetNotificationErr(
  title,
  message,
  timeout,
  backgroundColor,
  progressBarColor
) {
  iziToast.error({
    title,
    message,
    timeout,
    theme: "dark",
    backgroundColor,
    progressBarColor,
    position: "topRight",
    transitionIn: "flipInX",
    progressBar: true,
    progressBarEasing: "linear",
  });
}


