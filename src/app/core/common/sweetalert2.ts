import Swal from "sweetalert2";

const color_blue = "#0d6efd",
  color_red = "#f74a27";

export function error(msg: string) {
  Swal.fire({
    title: "Có lỗi xảy ra",
    text: msg,
    icon: "error",
    confirmButtonColor: color_blue,
  });
}

export function success(msg: string) {
  let timerInterval: any;
  Swal.fire({
    width: "fit-content",
    icon: "success",
    title: "",
    text: msg,
    backdrop: "none",
    customClass: {
      popup: "fadeInRight-popup",
      htmlContainer: "success-message",
      icon: "success-icon",
      confirmButton: "confirm-success-btn",
    },
    showClass: {
      popup: "fadeInRight-popup",
      icon: "",
    },
    hideClass: {
      popup: "fadeOutRight-popup",
      icon: "",
    },
    confirmButtonColor: color_blue,
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      timerInterval = setInterval(() => {}, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}

export function warning(msg: string) {
  Swal.fire({
    title: "Thông báo",
    text: msg,
    icon: "warning",
    confirmButtonColor: color_blue,
  });
}

export function confirmDialogSuccess(title: string) {
  const custom = { confirm: "OK" };
  return Swal.fire({
    title: "",
    text: title,
    icon: "success",
    showCancelButton: false,
    confirmButtonColor: color_blue,
    confirmButtonText: custom.confirm,
  });
}

export function confirmDialog(title: string) {
  const custom = { confirm: "Đồng ý", cancel: "Hủy" };
  return Swal.fire({
    title: "Thông báo",
    text: title,
    icon: "warning",
    showCancelButton: true,
    reverseButtons: true,
    confirmButtonColor: color_blue,
    cancelButtonColor: color_red,
    cancelButtonText: custom.cancel,
    confirmButtonText: custom.confirm,
  });
}

export function confirmDialogDelete(title: string) {
  const custom = { confirm: "Xoá", cancel: "Hủy" };
  return Swal.fire({
    title: "Cảnh báo",
    text: title,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: color_red,
    cancelButtonColor: color_blue,
    confirmButtonText: custom.confirm,
    cancelButtonText: custom.cancel,
  });
}

export function confirmDialogTag(title: string) {
  const custom = { confirm: "OK" };
  return Swal.fire({
    title: "Cảnh báo",
    text: title,
    icon: "warning",
    showCancelButton: false,
    confirmButtonColor: color_blue,
    confirmButtonText: custom.confirm,
  });
}

export function confirmInfo(msg: string) {
  return Swal.fire({
    icon: "info",
    title: "Thông báo",
    text: msg,
    confirmButtonText: "OK",
  });
}
