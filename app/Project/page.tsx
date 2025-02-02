"use client";
import React from "react";
import Coursoul from "@/components/Project/Coursoul";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type AppDetailsType = {
  title: string;
  icon: StaticImageData;
  description: string;
  link: string;
  features: JSX.Element;
  Technologies: { name: string; link: string }[];
  images: StaticImageData[];
};

export default function Page() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const AppDetails: AppDetailsType | null =
    slug === "splitzy"
      ? {
          title: "Splitzy : Simplify Expenses",
          icon: require("@/app/assets/projects/Splitzy/SplitzyIcon.png"),
          description:
            "Splitzy is a feature-rich mobile app designed to make group expense management hassle-free. From splitting bills to tracking payments and settling debts, it offers a user-friendly solution to keep finances organized within groups, Easy Bill Splitting: Share expenses equally or customize shares, Payment Tracking: Record payments and monitor balances in real time, Expense Summaries: Detailed reports for better financial clarity, Secure and Private: User data is securely managed to ensure privacy",
          link: "https://drive.google.com/drive/folders/12BgX4XCC47JJA-4WNGVFculIYF-ssWwx?usp=drive_link",
          features: (
            <ul className="list-disc pl-5">
              <li>
                Track both <b>group and individual expenses</b> efficiently.
              </li>
              <li>
                <b>Flexible expense splitting</b>: Supports{" "}
                <b>
                  equal, percentage-based, share-based, and custom (unequal)
                  contributions
                </b>
                with single or multiple payers.
              </li>
              <li>
                <b>Seamless payment settlements</b>: Log payments made between
                users and <b>auto-adjust balances</b> accordingly.
              </li>
              <li>
                <b>Push notifications & reminders</b>:
                <ul className="list-disc pl-5">
                  <li>
                    Get notified for
                    <b> new expenses, payments, and settlements</b>.
                  </li>
                  <li>
                    Option to <b>toggle push notifications on/off</b> in
                    settings.
                  </li>
                </ul>
              </li>
              <li>
                <b>Activity Logs & Comments</b>: Maintain a
                <b>detailed history of group activities</b>, including expense
                additions and deletions, with a comment section for better
                tracking.
              </li>
              <li>
                <b>Detailed analytics & reports</b>: Generate{" "}
                <b>expense summaries and reports as PDFs</b> for easy tracking
                and sharing.
              </li>
              <li>
                <b>User management made easy</b>: Add users quickly via{" "}
                <b>QR code scanning</b>.
              </li>
              <li>
                <b>Enhanced security</b>:
                <ul className="list-disc pl-5">
                  <li>
                    <b>App lock</b> for additional authentication security.
                  </li>
                  <li>
                    Secure <b>Google authentication & email sign-in</b>.
                  </li>
                </ul>
              </li>
              <li>
                <b>Dark mode support</b> for a visually comfortable experience.
              </li>
            </ul>
          ),
          Technologies: [
            {
              name: "React Native",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              name: "Typescript",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
            },
            {
              name: "Tailwind css",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "firebase",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
            },
            {
              name: "Expo",
              link: "",
            },
            {
              name: "Reanimated",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            },
          ],

          images: [
            require("@/app/assets/projects/Splitzy/Splitzy (25).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (19).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (1).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (15).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (2).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (18).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (11).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (20).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (12).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (29).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (30).jpg"),
            require("@/app/assets/projects/Splitzy/Splitzy (4).jpg"),
          ],
        }
      : slug === "overshare"
      ? {
          title: "OverShare: Wallpaper Notes for Productivity",
          icon: require("@/app/assets/projects/overshare/icon.png"),
          description:
            "OverShare is a React Native-based productivity app that transforms your home screen into an interactive reminder board. It allows users to create, edit, and pin notes directly onto wallpapers, ensuring important information is always in sight. Users can personalize notes with custom colors, select wallpapers from their gallery, or use predefined solid color themes. The app also supports real-time note search, sharing via other apps, and smooth animations for an intuitive experience. With features like light/dark mode adaptation, gesture-based note adjustments, and a visually appealing UI, OverShare enhances productivity while keeping things stylish.",
          link: "https://drive.google.com/drive/folders/18wgLJPpnZ-y3WczFFSYImtWZSuiSfOXG?usp=drive_link",
          features: (
            <ul className="list-disc pl-5">
              <li>
                <b>Create, update, delete, and pin notes</b> directly on the
                home screen wallpaper.
              </li>
              <li>
                <b>Personalized note customization</b>: Adjust{" "}
                <b>colors, opacity, position, and rotation</b> for each note.
              </li>
              <li>
                <b>Wallpaper customization</b>: Choose from{" "}
                <b>gallery images</b> or <b>prebuilt solid color themes</b>.
              </li>

              <li>
                Smooth <b>animations</b> enhance the user experience.
              </li>
              <li>
                <b>Search & organization</b>: Find notes quickly by title.
              </li>
              <li>
                <b>Note sharing</b>: Easily share notes via any installed app.
              </li>
              <li>
                <b>Wallpaper saving & setting</b>: Download and apply custom
                wallpapers directly from the app.
              </li>
              <li>
                <b>Beautiful UI with smooth gestures</b>, built using Tailwind
                CSS and Reanimated.
              </li>
              <li>
                <b>Automatic dark/light mode</b> adapts to the device theme for
                a seamless experience.
              </li>
            </ul>
          ),
          Technologies: [
            {
              name: "React Native",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              name: "Typescript",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
            },
            {
              name: "Tailwind css",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "Expo",
              link: "",
            },
            {
              name: "Reanimated",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            },
          ],
          images: [
            require("@/app/assets/projects/overshare/overshare (1).jpg"),
            require("@/app/assets/projects/overshare/overshare (10).jpg"),
            require("@/app/assets/projects/overshare/overshare (2).jpg"),
            require("@/app/assets/projects/overshare/overshare (3).jpg"),
            require("@/app/assets/projects/overshare/overshare (5).jpg"),
            require("@/app/assets/projects/overshare/overshare (8).jpg"),
            require("@/app/assets/projects/overshare/overshare (7).jpg"),
            require("@/app/assets/projects/overshare/overshare (4).jpg"),
            require("@/app/assets/projects/overshare/overshare (9).jpg"),
          ],
        }
      : slug === "ble-connect"
      ? {
          title: "BLE Connect",
          icon: null,
          description:
            "A mobile app built with React Native and Expo for monitoring AC units via Bluetooth. BLE Connect displays real-time data like temperature, phase voltages (R, Y, B), and system health indicators. It features color-coded alerts, secure OTP-based authentication via Firebase, and easy Bluetooth pairing with QR codes. The app also allows users to customize the Bluetooth module name and provides comprehensive error handling for system diagnostics.",
          link: "",
          features: (
            <ul className="list-disc pl-5">
              <li>
                <b>Real-time monitoring</b>: View temperature, phase voltages
                (R, Y, B), and other key metrics with <b>color-coded alerts</b>.
              </li>
              <li>
                <b>Error diagnostics</b>: Get detailed system error statuses
                like phase loss, reverse phase sequence, and high/low voltage
                conditions.
              </li>
              <li>
                <b>Customizable Bluetooth module name</b>: Change the
                module&apos;s name directly within the app.
              </li>
              <li>
                <b>QR code-based pairing</b>: Effortlessly connect to the BLE
                module using a QR code embedded with the MAC address.
              </li>
              <li>
                <b>Secure authentication</b>: Use <b>Firebase OTP login</b> for
                secure access to the app.
              </li>

              <li>
                <b>Comprehensive error handling</b>: Displays fallback screens
                to manage connection failures and other issues.
              </li>

              <li>
                <b>Built-in version tracking</b>: Easily check the module’s{" "}
                <b>firmware and MCU versions</b>.
              </li>
            </ul>
          ),
          Technologies: [
            {
              name: "React Native",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              name: "Typescript",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
            },
            {
              name: "Tailwind css",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "Expo",
              link: "",
            },
          ],
          images: [
            require("@/app/assets/projects/BLE/ble 2.jpg"),
            require("@/app/assets/projects/BLE/ble 4.jpg"),
            require("@/app/assets/projects/BLE/ble 3.jpg"),
            require("@/app/assets/projects/BLE/ble 5.jpg"),
            require("@/app/assets/projects/BLE/ble 6.jpg"),
            require("@/app/assets/projects/BLE/ble 7.jpg"),
            require("@/app/assets/projects/BLE/ble 8.jpg"),
          ],
        }
      : null;

  if (!slug || !AppDetails) {
    return (
      <div className="flex items-center justify-center w-full h-dvh">
        <p>Oops! project not found</p>
      </div>
    );
  }
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-dvh">
          <p>Loading...</p>
        </div>
      }
    >
      <div className="p-5 ">
        <section className="bg-slate-900 p-4 rounded-xl">
          <h1 className="text-2xl font-bold my-2">{AppDetails?.title}</h1>

          <div className="flex items-center justify-between flex-wrap-reverse">
            <p className="sm:w-2/3">{AppDetails?.description}</p>
            {AppDetails?.icon && (
              <Image
                src={AppDetails?.icon}
                className="w-[150px] h-[150px] rounded-xl flex-grow-0 sm:m-3 max-sm:my-4"
                alt={"SplitzyIcon"}
              />
            )}
          </div>
          {AppDetails?.link && (
            <Link href={AppDetails?.link} target="_blank">
              <Button className="my-2 bg-gray-700 hover:bg-gray-600 text-white">
                <div className="flex gap-3 items-center justify-center">
                  <Download size={20} /> Download apk
                </div>
              </Button>
            </Link>
          )}
        </section>

        <section className="mt-5 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold my-2">Tech Stack</h2>
          <div className="flex flex-wrap">
            {AppDetails?.Technologies?.map((Skill, index) => {
              return (
                <span
                  key={index}
                  className="m-2 gap-2 flex justify-center items-center bg-slate-900 rounded-md w-fit px-2 py-1"
                >
                  {Skill.link && (
                    <Image
                      src={Skill.link}
                      width={15}
                      height={15}
                      className="aspect-square"
                      alt={Skill.name}
                    />
                  )}
                  <p className="text-[12px] text-slate-400">{Skill.name}</p>
                </span>
              );
            })}
          </div>
        </section>

        <section className="mt-5 bg-slate-900 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold my-2">Features</h2>
          {AppDetails?.features}
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">App Screenshots</h2>
          <Coursoul Data={AppDetails?.images} />
        </section>
      </div>
    </Suspense>
  );
}
