import React, { useEffect, useState } from "react";
import {
  expertsIconAppointments,
  expertsIconDp,
  expertsIconTodayPatients,
  expertsIconTotalPatients,
  palmWave,
} from "../../assets";
import { EXPERTS_DASHBOARD, EXPERTS_PROFILE_URI } from "../../data/api";
import axios from "axios";
import UpdateExpertSlots from "../../components/admin/UpdateExpertSlots";
import { useNavigate } from "react-router-dom";
import useLogout from "../../components/Auth/useLogout";
import { Helmet } from "react-helmet";

export default function DoctorDashboard({ token, setToken }) {
  const { logout } = useLogout();
  const [loading, setLoading] = useState(true); // set loading screen
  const [details, setDetails] = useState({}); // set loading screen
  const [slots, setSlots] = useState([]);

  const navigate = useNavigate();

  // ======== Get user appointments and details ===========
  let wleness_user = JSON.parse(localStorage.getItem("wleness_user"));

  if (
    token == null ||
    token == "" ||
    token == undefined ||
    wleness_user.type != "expert"
  ) {
    // Navigate to login
    useEffect(() => {
      navigate("/experts-login", {
        state: {
          successMessage: "Please Login",
        },
      });
    }, []);
    return null;
  }

  let url = EXPERTS_PROFILE_URI + wleness_user.user_id;
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          localStorage.setItem("userInfo", JSON.stringify(response.data));
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle errors
        if (error.response.status == 401) {
          // Logout and redirect user
          logout();
          useEffect(() => {
            navigate("/experts-login", {
              state: {
                successMessage: "Session Expired Please Login",
              },
            });
          }, []);
          return null;
        } else {
          console.error(error);
        }
      });
  }, []);

  // ============================================================
  // Fetch Experts Dashboard Details
  // ============================================================
  useEffect(() => {
    let data = {
      headers: {
        Authorization: "Bearer " + token,
      },
      params: {
        expert_id: wleness_user.user_id,
      },
    };

    axios
      .get(EXPERTS_DASHBOARD, data)
      .then((response) => {
        if (response.status == 200) {
          setDetails(response.data.data);
        }
      })
      .catch((error) => {
        // Handle errors
        if (error.response.status == 401) {
          // Logout and redirect user
          logout();
          useEffect(() => {
            navigate("/experts-login", {
              state: {
                successMessage: "Session Expired Please Login",
              },
            });
          }, []);
          return null;
        } else {
          console.error(error);
        }
      });
  }, [slots]);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <Helmet>
        <title>{details?.expert_name + " Dashboard"}</title>
      </Helmet>
      <section className="ml gap-5 lg:flex">
        <div className="lg:w-[65%]">
          <div className="flex text-xl lg:text-3xl">
            <h1 className="py-2 font-bold text-teal-500 lg:mb-2 lg:py-6">
              <span>Hello </span>
              <span className="font-bold text-teal-500">
                {details?.expert_name}
              </span>
            </h1>
            <img
              src={palmWave}
              alt="Your Image Description"
              className="h-8 w-8 object-contain lg:h-12 lg:w-12 "
            />
          </div>
          {/* Doctor Profile */}
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center rounded-2xl bg-teal-100 px-5 py-6">
              <img src={expertsIconTotalPatients} alt="" className="mr-4 w-8" />
              <div>
                <h4 className="font-semibold">Total Patients</h4>
                <h2 className="text-2xl font-semibold">
                  <span>{details?.total_patients}</span>
                  <span>+</span>
                </h2>
                <h3 className="text-sm font-medium">Till Today</h3>
              </div>
            </div>
            <div className="flex items-center rounded-2xl bg-teal-100 px-5 py-6">
              <img src={expertsIconTodayPatients} alt="" className="mr-4 w-8" />
              <div>
                <h4 className="font-semibold">Total Patients</h4>
                <h2 className="text-2xl font-semibold">
                  <span>{details?.current_month?.patients} +</span>
                </h2>
                <h3 className="text-sm font-medium">
                  {details?.current_month?.month}
                </h3>
              </div>
            </div>
            <div className="flex items-center rounded-2xl bg-teal-100 px-5 py-6">
              <img src={expertsIconAppointments} alt="" className="mr-4 w-8" />
              <div>
                <h4 className="font-semibold">Appointments</h4>
                <h2 className="text-2xl font-semibold">
                  <span>{details?.appointments?.length}</span>
                </h2>
                <h3 className="text-sm font-medium">
                  {details?.appointments?.length > 0
                    ? details?.appointments[0].appointment_date
                    : "No appointments"}
                </h3>
              </div>
            </div>
          </div>

          <div className="py-6">
            <h3 className="mb-6 text-xl font-bold">
              Update Your Available Slots
            </h3>
            <UpdateExpertSlots
              token={token}
              selected_slots={details?.slots}
              slots={slots}
              setSlots={setSlots}
            />
          </div>
        </div>
        <div className="p-4 lg:w-[35%]">
          <div className="mb-6 rounded-xl bg-[#FDFFE4] px-6 py-4 drop-shadow-md">
            <h5 className="mb-2 flex items-center justify-between">
              <span className="font-bold text-primary-400">
                Upcoming Appointments
              </span>
            </h5>

            <div>
              <div className="mb-3 flex justify-between font-semibold">
                <span>Patient Name</span>
                <span>Time</span>
              </div>
              <div>
                {details?.appointments?.map((value, i) => (
                  <div
                    className="mb-3 flex items-center justify-between"
                    key={i}
                  >
                    <div className="flex gap-3">
                      <img src={value.image} alt="" className="w-10" />
                      <div className="flex flex-col">
                        <h5 className="font-semibold text-primary-400">
                          {value.name}
                        </h5>
                        <small className="-mt-1">
                          {value.appointment_date}
                        </small>
                      </div>
                    </div>
                    <span className="text-xs font-medium">{value.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {details?.appointments?.length > 0 ? (
            <div className="rounded-xl bg-[#FDFFE4] px-6 py-4 drop-shadow-md lg:py-6">
              <h5 className="mb-2 flex items-center justify-between lg:mb-4">
                <span className="font-bold text-primary-400">
                  Next Patient Details
                </span>
              </h5>

              <div className="space-y-3 lg:space-y-5">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <img
                      src={
                        details?.appointments
                          ? details?.appointments[0]?.image
                          : "None"
                      }
                      alt=""
                      className="w-10"
                    />
                    <div className="flex flex-col">
                      <h5 className="font-semibold text-primary-400">
                        {details?.appointments
                          ? details?.appointments[0]?.name
                          : "None"}
                      </h5>
                      <small className="-mt-1">
                        {details?.appointments
                          ? details?.appointments[0]?.appointment_date
                          : "None"}
                      </small>
                    </div>
                  </div>
                  <span className="text-sm font-medium">
                    {details?.appointments
                      ? details?.appointments[0]?.time
                      : "None"}
                  </span>
                </div>

                <div>
                  <h5 className="font-bold text-primary-400">
                    Last Appointment
                  </h5>
                  <span className="block text-sm font-semibold">
                    {details?.appointments
                      ? details?.appointments[0]?.last_appointment
                      : "None"}
                  </span>
                </div>

                <div>
                  <h5 className="mb-1 block font-bold text-primary-400">
                    Category
                  </h5>

                  <div className="flex flex-wrap gap-1">
                    <button className="rounded-lg bg-primary-300 px-4 py-1.5 text-sm font-semibold capitalize text-white">
                      {details?.appointments
                        ? details?.appointments[0]?.category
                        : "None"}
                    </button>
                  </div>
                </div>

                <div>
                  <h5 className="block font-bold text-primary-400">
                    Mode of Therapy
                  </h5>
                  <span className="-mt-1 block text-sm font-semibold capitalize">
                    {details?.appointments
                      ? details?.appointments[0]?.mode
                      : "None"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center font-semibold">No Appointments Yet</p>
          )}
        </div>
      </section>
    </>
  );
}
