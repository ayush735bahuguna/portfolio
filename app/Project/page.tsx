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

function ProjectPageContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const AppDetails: AppDetailsType | null =
    slug === "splitzy"
      ? {
          title: "Splitzy : Simplify Expenses",
          icon: require("@/app/assets/projects/Splitzy/SplitzyIcon.png"),
          description:
            "Splitzy is a smart expense management app designed to simplify the way individuals and groups handle shared and personal finances. Whether you’re splitting bills with friends, managing group trips, or simply tracking your daily expenses, Splitzy ensures everything stays organized and transparent. It offers multiple ways to split costs, automatically adjusts balances when payments are made, and keeps detailed records for accountability. Users can track personal spending trends with charts, generate professional reports, and even manage expenses offline with seamless data sync. With secure login options, app lock protection, and a modern intuitive interface with dark mode, Splitzy is built for both convenience and trust. From roommates to colleagues, travel groups to personal budgets—Splitzy makes expense sharing easy, clear, and hassle-free.",
          link: "https://drive.google.com/drive/folders/12BgX4XCC47JJA-4WNGVFculIYF-ssWwx?usp=drive_link",
          features: (
            <ul className="list-disc pl-5">
              <li>
                <b>Expense Management</b>
                <ul className="list-disc pl-5">
                  <li>
                    Track <b>group, personal, and one-on-one expenses</b> with
                    dedicated tabs.
                  </li>
                  <li>
                    Record and manage spendings across{" "}
                    <b>friends, roommates, office, and trips</b>.
                  </li>
                </ul>
              </li>

              <li>
                <b>Flexible Splitting & Settlements</b>
                <ul className="list-disc pl-5">
                  <li>
                    Split expenses{" "}
                    <b>
                      equally, by percentage, by shares, or custom contributions
                    </b>
                    .
                  </li>
                  <li>
                    Supports <b>single or multiple payers</b> in a transaction.
                  </li>
                  <li>
                    Log payments between users and <b>auto-adjust balances</b>{" "}
                    instantly.
                  </li>
                </ul>
              </li>

              <li>
                <b>Offline-First Support</b>
                <ul className="list-disc pl-5">
                  <li>
                    <b>Add and manage expenses</b> without internet
                    connectivity.
                  </li>
                  <li>
                    <b>Automatic synchronization</b> when online to keep data
                    updated.
                  </li>
                </ul>
              </li>

              <li>
                <b>Insights & Reports</b>
                <ul className="list-disc pl-5">
                  <li>
                    View detailed <b>daily, monthly, and yearly statistics</b>.
                  </li>
                  <li>
                    Interactive charts for better visualization of spending.
                  </li>
                  <li>
                    Export professional <b>PDF reports</b> for sharing and
                    record-keeping.
                  </li>
                </ul>
              </li>

              <li>
                <b>Notifications & Activity Tracking</b>
                <ul className="list-disc pl-5">
                  <li>
                    Receive alerts for{" "}
                    <b>new expenses, settlements, and payments</b>.
                  </li>
                  <li>
                    Option to <b>enable/disable notifications</b> as needed.
                  </li>
                  <li>
                    Maintain a detailed <b>activity history</b> with logs and
                    contextual comments.
                  </li>
                </ul>
              </li>

              <li>
                <b>User Management</b>
                <ul className="list-disc pl-5">
                  <li>
                    Add new users quickly via <b>QR code scanning</b>.
                  </li>
                </ul>
              </li>

              <li>
                <b>Security & Privacy</b>
                <ul className="list-disc pl-5">
                  <li>
                    Protect data with <b>app lock</b> for additional
                    authentication.
                  </li>
                  <li>
                    Enable <b>Google authentication and email sign-in</b> for
                    secure login.
                  </li>
                </ul>
              </li>

              <li>
                <b>Modern Interface</b>
                <ul className="list-disc pl-5">
                  <li>
                    Upgraded, <b>intuitive UI</b> for a better user experience.
                  </li>
                  <li>
                    <b>Dark mode support</b> for comfortable usage anytime.
                  </li>
                </ul>
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
            require("@/app/assets/projects/Splitzy/splitzy-16.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-15.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-1.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-2.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-3.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-6.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-13.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-9.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-4.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-7.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-11.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-14.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-10.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-12.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-8.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-17.jpg"),
            require("@/app/assets/projects/Splitzy/splitzy-5.jpg"),
          ],
        }
      : slug === "overshare"
      ? {
          title: "OverShare: Wallpaper Notes for Productivity",
          icon: require("@/app/assets/projects/overshare/icon.png"),
          description:
            "OverShare is a React Native-based productivity app that transforms your home screen into an interactive reminder board. It allows users to create, edit, and pin notes directly onto wallpapers, ensuring important information is always in sight. Users can personalize notes with custom colors, select wallpapers from their gallery, or use predefined solid color themes. The app also supports real-time note search, sharing via other apps, and smooth animations for an intuitive experience. With features like light/dark mode adaptation, gesture-based note adjustments, and a visually appealing UI, OverShare enhances productivity while keeping things stylish.",
          link: "https://play.google.com/store/apps/details?id=com.ayushbahuguna1122.overshare",
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
            require("@/app/assets/projects/overshare/overshare (3).png"),
            require("@/app/assets/projects/overshare/overshare (2).png"),
            require("@/app/assets/projects/overshare/overshare (4).png"),
            require("@/app/assets/projects/overshare/overshare (5).png"),
            require("@/app/assets/projects/overshare/overshare (6).png"),
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
      : slug === "feed4me"
      ? {
          title: "Feed4Me - Digital Food Ecosystem",
          icon: require("@/app/assets/FEED4ME.png"),
          description:
            "Feed4Me is an app-based digital food ecosystem platform that connects farmers, retailers, NGOs, and consumers, focusing on smooth crop sell-purchase, efficient storage facilities, and food waste management. It offers comprehensive features including real-time weather alerts, a news blog, a Crop Encyclopedia, chat functionality, multilingual support, and mapping tools. Feed4Me promotes transparency and collaboration across the food supply chain by enabling direct communication and transactions among participants. It empowers customers to access fresh farm produce, NGOs to monitor and redistribute food waste, and farmers to sell their crops directly while managing storage and learning from educational content. The platform supports sustainable practices by reducing food waste, improving efficiency, and creating passive income opportunities through shared storage. Overall, Feed4Me aims to foster a smarter, more sustainable food future by integrating technology, real-time data, and community participation for all stakeholders in the food ecosystem.",
          link: "https://docs.google.com/document/d/1gYl99UrFIsS4HHEOWRQzdk2NtEcPepuVNsL6sbVVlX4/edit?usp=sharing",
          features: (
            <ul className="list-disc pl-5">
              {" "}
              <li>
                {" "}
                <b>Customer App Features</b>:{" "}
                <ul className="list-disc pl-5">
                  {" "}
                  <li>
                    <b>Fresh produce access</b>: Direct connection with local
                    farmers for farm-fresh vegetables and grains.
                  </li>{" "}
                  <li>
                    <b>Food waste reporting</b>: Easily report food wastage to
                    help improve sustainability.
                  </li>{" "}
                  <li>
                    <b>Storage rental for passive income</b>: Rent or share
                    storage spaces for agricultural produce.
                  </li>{" "}
                  <li>
                    <b>Real-time chat</b>: Instant communication with farmers
                    and storage providers for coordination.
                  </li>{" "}
                  <li>
                    <b>Order tracking</b>: Track your orders and deliveries with
                    automated alerts.
                  </li>{" "}
                  <li>
                    <b>Multilingual support</b>: Access the app in your
                    preferred language for better usability.
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
              <br />
              <li>
                {" "}
                <b>NGO App Features</b>:{" "}
                <ul className="list-disc pl-5">
                  {" "}
                  <li>
                    <b>Food waste tracking</b>: Monitor surplus and wasted food
                    with real-time data and reports.
                  </li>{" "}
                  <li>
                    <b>Food distribution management</b>: Coordinate collection
                    and delivery of food donations efficiently.
                  </li>{" "}
                  <li>
                    <b>Feed humans and cattle</b>: Channel excess food to both
                    people in need and livestock.
                  </li>{" "}
                  <li>
                    <b>Collaboration and communication</b>: Seamless interaction
                    with farmers, storage, and donors via chat and
                    notifications.
                  </li>{" "}
                  <li>
                    <b>Integration with food waste management system</b>:
                    Supports eco-friendly, transparent food redistribution.
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
              <br />
              <li>
                {" "}
                <b>Farmer App Features</b>:{" "}
                <ul className="list-disc pl-5">
                  {" "}
                  <li>
                    <b>Crop sell/trade marketplace</b>: Easily sell and trade
                    crops directly without brokers.
                  </li>{" "}
                  <li>
                    <b>Storage access and mapping</b>: Find and book nearby
                    storage facilities with geolocation.
                  </li>{" "}
                  <li>
                    <b>Food waste reporting</b>: Report surplus crops to reduce
                    waste.
                  </li>{" "}
                  <li>
                    <b>Learning resources</b>: Access YouTube videos, Crop
                    Encyclopedia, and government scheme info.
                  </li>{" "}
                  <li>
                    <b>Real-time chat</b>: Communicate with customers and
                    storage owners for efficient coordination.
                  </li>{" "}
                  <li>
                    <b>Weather alerts</b>: Get location-specific weather
                    forecasts to plan farming activities.
                  </li>{" "}
                  <li>
                    <b>Secure payment facility</b>: Safe, integrated digital
                    payments between farmers and buyers.
                  </li>{" "}
                  <li>
                    <b>Multilingual support</b>: Interface tailored for various
                    local languages.
                  </li>{" "}
                  <li>
                    <b>News blog</b>: Stay updated with the latest
                    agriculture-related news and trends.
                  </li>{" "}
                </ul>{" "}
              </li>{" "}
            </ul>
          ),
          Technologies: [
            {
              name: "React Native",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              name: "TypeScript",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
            },
            {
              name: "Tailwind CSS",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              name: "Expo",
              link: "",
            },
            {
              name: "AWS",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            },
            {
              name: "Docker",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            },
            {
              name: "MongoDB",
              link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            },
          ],
          images: [
            require("@/app/assets/projects/FEED4ME/one.jpeg"),
            require("@/app/assets/projects/FEED4ME/two.jpeg"),
            require("@/app/assets/projects/FEED4ME/three.jpeg"),
          ],
        }
      : null;

  if (!slug || !AppDetails) {
    return (
      <div className="flex items-center justify-center w-full h-dvh bg-black text-white">
        <p>Oops! project not found</p>
      </div>
    );
  }
  return (
    <div className="p-5 bg-black text-white">
      <section className="bg-slate-900 p-4 rounded-xl">
        <h1 className="text-2xl font-bold my-2">{AppDetails?.title}</h1>

        <div className="flex items-center justify-between flex-wrap-reverse">
          <p className="sm:w-2/3">{AppDetails?.description}</p>
          {AppDetails?.icon && (
            <Image
              src={AppDetails?.icon}
              blurDataURL={AppDetails?.icon?.blurDataURL}
              className="w-[150px] h-[150px] rounded-xl flex-grow-0 sm:m-3 max-sm:my-4"
              alt={"SplitzyIcon"}
            />
          )}
        </div>
        {AppDetails?.link && (
          <Link href={AppDetails?.link} target="_blank">
            <Button className="my-2 bg-gray-700 hover:bg-gray-600 text-white">
              <div className="flex gap-3 items-center justify-center">
                <Download size={20} /> Download app
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
        <h2 className="text-2xl font-semibold">Related Images</h2>
        <Coursoul Data={AppDetails?.images} />
      </section>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-full h-dvh">
          <p>Loading...</p>
        </div>
      }
    >
      <ProjectPageContent />
    </Suspense>
  );
}
