import axios from "axios";
import Swal from "sweetalert2";
import { ErrorToast, SuccessToast } from "./FormHelper";


export const DeleteAlertBlogPost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      let URL = `/api/dashboard/blog/delete?id=${id}`;
      try {
        const result = await axios.delete(URL);

        if (result.data.status === "Success") {
          return true;
        } else {
          ErrorToast("Something Went Wrong-1");
          return false;
        }
      } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
      }
    }
  });
};

export const DeleteAlertServicePost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      let URL = `/api/dashboard/service/delete?id=${id}`;
      try {
        const result = await axios.delete(URL);
        if (result.data.status === "Success") {
          SuccessToast("Service deleted successfully");
          return true;
        } else {
          ErrorToast("Something Went Wrong-1");
          return false;
        }
      } catch (e) {
        ErrorToast("Something Went Wrong-2");
        return false;
      }
    }
  });
};
