import {
  AlertCircle,
  ExternalLink,
  Smartphone,
  ShieldCheck,
  Zap,
  Activity,
  Users,
  Layout,
  Cloud,
  Database,
  MapPin,
  TrendingUp,
  Cpu,
  Layers,
  Settings,
  Bell,
  BarChart3,
  CreditCard,
  QrCode,
  Globe,
  ShoppingBag,
  Heart,
  CloudSun,
  Rss,
  BookOpen,
  WifiOff,
} from "lucide-react";
import {
  FeatureCard,
  FeatureList,
  FeatureItem,
} from "@/components/Project/FeatureCard";
import { StaticImageData } from "next/image";
import React from "react";
import { TECH } from "./tech";

export type ProjectDetail = {
  title: string;
  icon: StaticImageData | null;
  description: string;
  link: string;
  features: JSX.Element;
  Technologies: { name: string; link: string }[];
  images: StaticImageData[];
  problem?: JSX.Element;
  solution?: JSX.Element;
  architecture?: JSX.Element;
  challenges?: JSX.Element;
  audience?: JSX.Element;
  conclusion?: JSX.Element;
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  splitzy: {
    title: "Splitzy : Simplify Expenses",
    icon: require("@/app/assets/projects/Splitzy/SplitzyIcon.png"),
    description:
      "Splitzy is a smart expense management app designed to simplify the way individuals and groups handle shared and personal finances. Whether you’re splitting bills with friends, managing group trips, or simply tracking your daily expenses, Splitzy ensures everything stays organized and transparent. It offers multiple ways to split costs, automatically adjusts balances when payments are made, and keeps detailed records for accountability. Users can track personal spending trends with charts, generate professional reports, and even manage expenses offline with seamless data sync. With secure login options, app lock protection, and a modern intuitive interface with dark mode, Splitzy is built for both convenience and trust. From roommates to colleagues, travel groups to personal budgets—Splitzy makes expense sharing easy, clear, and hassle-free.",
    link: "https://drive.google.com/drive/folders/12BgX4XCC47JJA-4WNGVFculIYF-ssWwx?usp=drive_link",
    features: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard Icon={CreditCard} title="Expense Management" color="blue">
          <FeatureList>
            <FeatureItem color="blue">
              Track <b>group, personal, and one-on-one expenses</b> with
              dedicated tabs.
            </FeatureItem>
            <FeatureItem color="blue">
              Record and manage spendings across{" "}
              <b>friends, roommates, office, and trips</b>.
            </FeatureItem>
          </FeatureList>
        </FeatureCard>

        <FeatureCard
          Icon={Zap}
          title="Flexible Splitting & Settlements"
          color="purple"
        >
          <FeatureList>
            <FeatureItem color="purple">
              Split expenses{" "}
              <b>equally, by percentage, by shares, or custom contributions</b>.
            </FeatureItem>
            <FeatureItem color="purple">
              Supports <b>single or multiple payers</b> in a transaction.
            </FeatureItem>
            <FeatureItem color="purple">
              Log payments between users and <b>auto-adjust balances</b>{" "}
              instantly.
            </FeatureItem>
          </FeatureList>
        </FeatureCard>

        <FeatureCard Icon={Cloud} title="Offline-First Support" color="emerald">
          <FeatureList>
            <FeatureItem color="emerald">
              <b>Add and manage expenses</b> without internet connectivity.
            </FeatureItem>
            <FeatureItem color="emerald">
              <b>Automatic synchronization</b> when online to keep data updated.
            </FeatureItem>
          </FeatureList>
        </FeatureCard>

        <FeatureCard Icon={BarChart3} title="Insights & Reports" color="orange">
          <FeatureList>
            <FeatureItem color="orange">
              View detailed <b>daily, monthly, and yearly statistics</b>.
            </FeatureItem>
            <FeatureItem color="orange">
              Interactive charts for better visualization of spending.
            </FeatureItem>
            <FeatureItem color="orange">
              Export professional <b>PDF reports</b> for sharing and
              record-keeping.
            </FeatureItem>
          </FeatureList>
        </FeatureCard>

        <FeatureCard
          Icon={Bell}
          title="Notifications & Activity Tracking"
          color="pink"
        >
          <FeatureList>
            <FeatureItem color="pink">
              Receive alerts for <b>new expenses, settlements, and payments</b>.
            </FeatureItem>
            <FeatureItem color="pink">
              Option to <b>enable/disable notifications</b> as needed.
            </FeatureItem>
            <FeatureItem color="pink">
              Maintain a detailed <b>activity history</b> with logs and
              contextual comments.
            </FeatureItem>
          </FeatureList>
        </FeatureCard>

        <FeatureCard Icon={QrCode} title="User Management" color="cyan">
          <FeatureList>
            <FeatureItem color="cyan">
              Add new users quickly via <b>QR code scanning</b>.
            </FeatureItem>
          </FeatureList>
        </FeatureCard>

        <FeatureCard Icon={ShieldCheck} title="Security & Privacy" color="red">
          <FeatureList>
            <FeatureItem color="red">
              Protect data with <b>app lock</b> for additional authentication.
            </FeatureItem>
            <FeatureItem color="red">
              Enable <b>Google authentication and email sign-in</b> for secure
              login.
            </FeatureItem>
          </FeatureList>
        </FeatureCard>

        <FeatureCard Icon={Layout} title="Modern Interface" color="yellow">
          <FeatureList>
            <FeatureItem color="yellow">
              Upgraded, <b>intuitive UI</b> for a better user experience.
            </FeatureItem>
            <FeatureItem color="yellow">
              <b>Dark mode support</b> for comfortable usage anytime.
            </FeatureItem>
          </FeatureList>
        </FeatureCard>
      </div>
    ),
    Technologies: [
      TECH.REACT_NATIVE,
      TECH.TYPESCRIPT,
      TECH.TAILWIND,
      TECH.FIREBASE,
      TECH.EXPO,
      TECH.REANIMATED,
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
    conclusion: (
      <div className="flex flex-col gap-8">
        <p className="text-slate-300 italic text-lg leading-relaxed">
          &quot;Splitzy successfully transforms the often tedious task of
          expense tracking into a seamless, automated experience. By combining
          real-time synchronization with flexible splitting logic and
          professional reporting, it provides a trustworthy platform for groups
          and individuals to maintain financial transparency. From travel groups
          to daily roommates, Splitzy ensures that everyone stays on the same
          page, literally and financially.&quot;
        </p>

        <div className="pt-8 border-t border-slate-800 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl mt-8 font-bold text-white">
              Ready to simplify your shared expenses?
            </h3>
            <p className="text-slate-400">
              Download the Splitzy APK or view the demo to start managing your
              finances better.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-black/40 p-6 rounded-2xl border border-slate-800">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Developer
              </p>
              <p className="text-white text-lg">Ayush Bahuguna</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Tech Stack
              </p>
              <p className="text-blue-400">
                React Native, Expo, Firebase, TypeScript
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Status
              </p>
              <p className="text-green-400">
                Functional Demo Available (Build v1.0.4)
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  overshare: {
    title: "OverShare: Wallpaper Notes for Productivity",
    icon: require("@/app/assets/projects/overshare/icon.png"),
    description:
      "OverShare is an innovative productivity application that reimagines the traditional note-taking experience. It addresses the 'out of sight, out of mind' problem by transforming important tasks and affirmations into personalized wallpapers. Developed by CodeStream Innovations, Overshare allows users to create, update, and manipulate notes visually—integrating them seamlessly with gallery images or custom color schemes to create a functional home screen aesthetic.",
    link: "https://play.google.com/store/apps/details?id=com.ayushbahuguna1122.overshare",
    problem: (
      <div className="flex flex-col gap-4 text-slate-300">
        <p>
          In standard productivity apps, tasks are hidden inside lists that
          require the user to actively open the app.
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>
            <b>Visibility:</b> Important reminders are often forgotten once the
            phone is locked.
          </li>
          <li>
            <b>Rigidity:</b> Most apps offer zero control over how text looks,
            making them unappealing to set as a permanent background.
          </li>
          <li>
            <b>Disconnection:</b> Users have to choose between a beautiful
            wallpaper or a functional one.
          </li>
        </ul>
      </div>
    ),
    solution: (
      <p className="text-slate-300">
        Overshare bridges this gap by acting as a <b>Visual Note Editor</b>. It
        provides a robust CRUD system where the final output is not just a text
        file, but a high-resolution image. By placing notes directly on the lock
        or home screen, the user&apos;s goals are always front-and-center
        without requiring an app launch.
      </p>
    ),
    features: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          Icon={Layout}
          title="Wallpaper Playground"
          color="blue"
          padding="p-6"
        >
          <p className="text-slate-400 text-sm leading-relaxed">
            Import gallery images, use SVG schemes, and manipulate text with
            intuitive gesture controls.
          </p>
        </FeatureCard>
        <FeatureCard
          Icon={Zap}
          title="Productivity Tools"
          color="purple"
          padding="p-6"
        >
          <p className="text-slate-400 text-sm leading-relaxed">
            Seamless note management with smart search and one-tap lock screen
            integration.
          </p>
        </FeatureCard>
        <FeatureCard
          Icon={Layers}
          title="Themes & Saving"
          color="pink"
          padding="p-6"
        >
          <p className="text-slate-400 text-sm leading-relaxed">
            Light/Dark modes and the ability to save high-res compositions
            directly to your gallery.
          </p>
        </FeatureCard>
      </div>
    ),

    challenges: (
      <div className="flex flex-col gap-4">
        <div className="p-6 bg-orange-500/5 rounded-3xl border-2 border-slate-800 flex gap-4 items-start">
          <div className="p-2 bg-orange-500/20 rounded-xl text-orange-400">
            <AlertCircle size={20} />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Privacy & Security</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Integrated local encryption for password-protected notes, ensuring
              private thoughts stay private even if the device is shared.
            </p>
          </div>
        </div>
        <div className="p-6 bg-blue-500/5 rounded-3xl border-2 border-slate-800 flex gap-4 items-start">
          <div className="p-2 bg-blue-500/20 rounded-xl text-blue-400">
            <WifiOff size={20} />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">
              Offline First Approach
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Implemented robust local data persistence and synchronization
              logic to ensure a seamless user experience even without an
              internet connection.
            </p>
          </div>
        </div>
      </div>
    ),
    conclusion: (
      <div className="flex flex-col gap-8">
        <p className="text-slate-300 italic text-lg leading-relaxed">
          &quot;Overshare is more than a note-taking app; it is a &apos;screen
          real estate&apos; manager. By combining the utility of a task manager
          with the creative freedom of a photo editor, it offers a unique
          solution for staying organized. Whether using a personal photo or a
          clean color scheme, Overshare ensures that productivity never
          compromises style.&quot;
        </p>

        <div className="pt-8 border-t border-slate-800 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl mt-8 font-bold text-white">
              Ready to transform your notes into art?
            </h3>
            <p className="text-slate-400">
              Download Overshare today and start organizing your thoughts
              visually.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-black/40 p-6 rounded-2xl border border-slate-800">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Developer
              </p>
              <p className="text-white text-lg">Ayush Bahuguna</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Tech Stack
              </p>
              <p className="text-blue-400">React Native, Firebase Firestore</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Status
              </p>
              <p className="text-green-400">
                Available for Android on Google Play Store (v1.0.1)
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    Technologies: [
      TECH.REACT_NATIVE,
      TECH.TYPESCRIPT,
      TECH.TAILWIND,
      TECH.EXPO,
      TECH.REANIMATED,
      TECH.NODE_JS,
    ],
    images: [
      require("@/app/assets/projects/overshare/overshare (1).jpg"),
      require("@/app/assets/projects/overshare/overshare (3).png"),
      require("@/app/assets/projects/overshare/overshare (2).png"),
      require("@/app/assets/projects/overshare/overshare (4).png"),
      require("@/app/assets/projects/overshare/overshare (5).png"),
      require("@/app/assets/projects/overshare/overshare (6).png"),
    ],
  },
  "ble-connect": {
    title: "BLE Connect",
    icon: null,
    description:
      "A mobile app built with React Native and Expo for monitoring AC units via Bluetooth. BLE Connect displays real-time data like temperature, phase voltages (R, Y, B), and system health indicators. It features color-coded alerts, secure OTP-based authentication via Firebase, and easy Bluetooth pairing with QR codes. The app also allows users to customize the Bluetooth module name and provides comprehensive error handling for system diagnostics.",
    link: "",
    features: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard Icon={Activity} color="blue" padding="p-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <b>Real-time monitoring</b>: View temperature, phase voltages (R, Y,
            B), and other key metrics with <b>color-coded alerts</b>.
          </p>
        </FeatureCard>

        <FeatureCard Icon={AlertCircle} color="red" padding="p-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <b>Error diagnostics</b>: Get detailed system error statuses like
            phase loss, reverse phase sequence, and high/low voltage conditions.
          </p>
        </FeatureCard>

        <FeatureCard Icon={Settings} color="purple" padding="p-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <b>Customizable Bluetooth module name</b>: Change the module&apos;s
            name directly within the app.
          </p>
        </FeatureCard>

        <FeatureCard Icon={QrCode} color="cyan" padding="p-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <b>QR code-based pairing</b>: Effortlessly connect to the BLE module
            using a QR code embedded with the MAC address.
          </p>
        </FeatureCard>

        <FeatureCard Icon={ShieldCheck} color="emerald" padding="p-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <b>Secure authentication</b>: Use <b>Firebase OTP login</b> for
            secure access to the app.
          </p>
        </FeatureCard>

        <FeatureCard Icon={Zap} color="orange" padding="p-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <b>Comprehensive error handling</b>: Displays fallback screens to
            manage connection failures and other issues.
          </p>
        </FeatureCard>

        <FeatureCard Icon={Smartphone} color="yellow" padding="p-6">
          <p className="text-slate-300 text-sm leading-relaxed">
            <b>Built-in version tracking</b>: Easily check the module’s{" "}
            <b>firmware and MCU versions</b>.
          </p>
        </FeatureCard>
      </div>
    ),
    Technologies: [
      TECH.REACT_NATIVE,
      TECH.TYPESCRIPT,
      TECH.TAILWIND,
      TECH.EXPO,
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
    conclusion: (
      <div className="flex flex-col gap-8">
        <p className="text-slate-300 italic text-lg leading-relaxed">
          &quot;BLE Connect bridges the gap between industrial hardware and
          modern mobile convenience. By providing real-time telemetry and
          diagnostic data over Bluetooth, it empowers technicians to monitor
          HVAC health without physical contact, improving safety and efficiency.
          The integration of secure authentication and QR-based pairing makes it
          a robust tool for professional industrial environments.&quot;
        </p>

        <div className="pt-8 border-t border-slate-800 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl mt-8 font-bold text-white">
              Optimizing Industrial Maintenance
            </h3>
            <p className="text-slate-400">
              BLE Connect demonstrates the power of low-energy wireless
              protocols in critical monitoring applications.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-black/40 p-6 rounded-2xl border border-slate-800">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Developer
              </p>
              <p className="text-white text-lg">Ayush Bahuguna</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Key technologies
              </p>
              <p className="text-blue-400">
                React Native, BLE PLugin, Firebase Lite
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Project Scope
              </p>
              <p className="text-green-400">Industrial IoT Solution</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  feed4me: {
    title: "Feed4Me - Digital Food Ecosystem",
    icon: require("@/app/assets/FEED4ME.png"),
    description:
      "Feed4Me is an app-based digital food ecosystem platform that connects farmers, retailers, NGOs, and consumers, focusing on smooth crop sell-purchase, efficient storage facilities, and food waste management. It offers comprehensive features including real-time weather alerts, a news blog, a Crop Encyclopedia, chat functionality, multilingual support, and mapping tools. Feed4Me promotes transparency and collaboration across the food supply chain by enabling direct communication and transactions among participants. It empowers customers to access fresh farm produce, NGOs to monitor and redistribute food waste, and farmers to sell their crops directly while managing storage and learning from educational content. The platform supports sustainable practices by reducing food waste, improving efficiency, and creating passive income opportunities through shared storage. Overall, Feed4Me aims to foster a smarter, more sustainable food future by integrating technology, real-time data, and community participation for all stakeholders in the food ecosystem.",
    link: "https://docs.google.com/document/d/1gYl99UrFIsS4HHEOWRQzdk2NtEcPepuVNsL6sbVVlX4/edit?usp=sharing",
    features: (
      <div className="flex flex-col gap-16">
        {/* Customer App */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-2xl">
              <ShoppingBag className="text-blue-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Customer App Features
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard Icon={Globe} color="blue" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Fresh produce access</b>: Direct connection with local
                farmers for farm-fresh vegetables and grains.
              </p>
            </FeatureCard>
            <FeatureCard Icon={AlertCircle} color="blue" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Food waste reporting</b>: Easily report food wastage to help
                improve sustainability.
              </p>
            </FeatureCard>
            <FeatureCard Icon={TrendingUp} color="blue" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Storage rental for passive income</b>: Rent or share storage
                spaces for agricultural produce.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Rss} color="blue" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Real-time chat</b>: Instant communication with farmers and
                storage providers for coordination.
              </p>
            </FeatureCard>
            <FeatureCard Icon={MapPin} color="blue" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Order tracking</b>: Track your orders and deliveries with
                automated alerts.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Layout} color="blue" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Multilingual support</b>: Access the app in your preferred
                language for better usability.
              </p>
            </FeatureCard>
          </div>
        </div>

        {/* NGO App */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-500/10 rounded-2xl">
              <Heart className="text-pink-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">NGO App Features</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard Icon={Activity} color="pink" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Food waste tracking</b>: Monitor surplus and wasted food with
                real-time data and reports.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Layers} color="pink" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Food distribution management</b>: Coordinate collection and
                delivery of food donations efficiently.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Users} color="pink" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Feed humans and cattle</b>: Channel excess food to both
                people in need and livestock.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Rss} color="pink" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Collaboration and communication</b>: Seamless interaction
                with farmers, storage, and donors via chat and notifications.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Database} color="pink" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Integration with food waste management system</b>: Supports
                eco-friendly, transparent food redistribution.
              </p>
            </FeatureCard>
          </div>
        </div>

        {/* Farmer App */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-2xl">
              <CloudSun className="text-emerald-400" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Farmer App Features
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard Icon={ShoppingBag} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Crop sell/trade marketplace</b>: Easily sell and trade crops
                directly without brokers.
              </p>
            </FeatureCard>
            <FeatureCard Icon={MapPin} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Storage access and mapping</b>: Find and book nearby storage
                facilities with geolocation.
              </p>
            </FeatureCard>
            <FeatureCard Icon={AlertCircle} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Food waste reporting</b>: Report surplus crops to reduce
                waste.
              </p>
            </FeatureCard>
            <FeatureCard Icon={BookOpen} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Learning resources</b>: Access YouTube videos, Crop
                Encyclopedia, and government scheme info.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Rss} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Real-time chat</b>: Communicate with customers and storage
                owners for efficient coordination.
              </p>
            </FeatureCard>
            <FeatureCard Icon={CloudSun} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Weather alerts</b>: Get location-specific weather forecasts
                to plan farming activities.
              </p>
            </FeatureCard>
            <FeatureCard Icon={CreditCard} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Secure payment facility</b>: Safe, integrated digital
                payments between farmers and buyers.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Globe} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>Multilingual support</b>: Interface tailored for various
                local languages.
              </p>
            </FeatureCard>
            <FeatureCard Icon={Layout} color="emerald" padding="p-6">
              <p className="text-slate-300 text-sm leading-relaxed">
                <b>News blog</b>: Stay updated with the latest
                agriculture-related news and trends.
              </p>
            </FeatureCard>
          </div>
        </div>
      </div>
    ),
    Technologies: [
      TECH.REACT_NATIVE,
      TECH.TYPESCRIPT,
      TECH.TAILWIND,
      TECH.EXPO,
      TECH.AWS,
      TECH.DOCKER,
      TECH.MONGO_DB,
    ],
    images: [
      require("@/app/assets/projects/FEED4ME/one.jpeg"),
      require("@/app/assets/projects/FEED4ME/two.jpeg"),
      require("@/app/assets/projects/FEED4ME/three.jpeg"),
    ],
    conclusion: (
      <div className="flex flex-col gap-8">
        <p className="text-slate-300 italic text-lg leading-relaxed">
          &quot;Feed4Me represents a holistic approach to solving food supply
          chain inefficiencies and waste. By creating a unified digital
          ecosystem that caters to the unique needs of farmers, consumers, and
          NGOs, it fosters a community-driven solution for food security. The
          platform&apos;s ability to coordinate storage rentals and food
          redistribution proves that technology can be a powerful ally in
          building a sustainable, waste-free future.&quot;
        </p>

        <div className="pt-8 border-t border-slate-800 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl mt-8 font-bold text-white">
              Building a Smarter Food Future
            </h3>
            <p className="text-slate-400">
              Explore how Feed4Me scales to impact local communities and global
              sustainability goals.
            </p>
          </div>

          <div className="flex flex-col gap-4 bg-black/40 p-6 rounded-2xl border border-slate-800">
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Developer
              </p>
              <p className="text-white text-lg">Ayush Bahuguna</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Architecture
              </p>
              <p className="text-blue-400">
                Full-stack (React Native, AWS, MongoDB, Docker)
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
                Impact
              </p>
              <p className="text-green-400">Sustainability & Agri-Tech</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
};
