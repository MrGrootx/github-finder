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

/*

iziToast.error({
         title: "",
         message: "No User Found",
         position: "topRight",
         progressBarColor: "#00ADB5",
         backgroundColor: "#222831",
         messageSize: "50px",
         timeout: 5000,
         transitionIn: "flipInX",
         messageColor: "white",
         theme: "dark",
         progressBar: true,
         progressBarEasing: 'linear',
       });
*/
