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
export async function exportUserData(data) {
  try {
    // Assuming you want to send data to another page using a POST request
    const res = await fetch('your_export_url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      console.log('Data successfully exported to another page');
      // Optionally, you can perform additional actions after successful export
    } else {
      console.log('Failed to export data to another page');
      // Optionally, handle the failure scenario
    }
  } catch (error) {
    console.error('Error during data export:', error);
    // Optionally, handle the error scenario
  }
}

*/
