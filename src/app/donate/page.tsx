"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Heart,
  CreditCard,
  Banknote,
  Gift,
  Shield,
  CheckCircle,
} from "lucide-react";

const donationOptions = [
  {
    amount: 500,
    icon: <Heart className="w-6 h-6" />,
    description: "Support a child's education for a month",
  },
  {
    amount: 1000,
    icon: <Banknote className="w-6 h-6" />,
    description: "Provide healthcare for a family",
  },
  {
    amount: 2000,
    icon: <Gift className="w-6 h-6" />,
    description: "Sponsor a community program",
  },
  {
    amount: 5000,
    icon: <Shield className="w-6 h-6" />,
    description: "Support a major initiative",
  },
];

export default function Donate() {
  const router = useRouter();
  const [selectedAmount, setSelectedAmount] = useState<string>("");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">(
    "one-time"
  );

  const handleDonate = () => {
    const amount = selectedAmount || customAmount;
    if (amount) {
      router.push(`/donate/payment?amount=${amount}`);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Heart className="w-5 h-5 mr-2" />
              Make a Difference
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                Support Our Cause
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Your contribution helps us continue our mission of empowering
              communities through education, healthcare, and sustainable
              development.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: "100%",
                  label: "Goes to Programs",
                  icon: <Heart className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-white/25 via-white/10 to-white/5",
                  borderGradient: "from-white/40 via-white/20 to-white/10",
                },
                {
                  number: "500+",
                  label: "Monthly Donors",
                  icon: <CreditCard className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-orange-400/25 via-orange-400/10 to-orange-400/5",
                  borderGradient: "from-orange-300/40 via-orange-300/20 to-orange-300/10",
                },
                {
                  number: "1L+",
                  label: "Lives Impacted",
                  icon: <Gift className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-pink-400/25 via-pink-400/10 to-pink-400/5",
                  borderGradient: "from-pink-300/40 via-pink-300/20 to-pink-300/10",
                },
                {
                  number: "25+",
                  label: "Years of Impact",
                  icon: <Shield className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-teal-400/25 via-teal-400/10 to-teal-400/5",
                  borderGradient: "from-teal-300/40 via-teal-300/20 to-teal-300/10",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className="mb-3 mx-auto w-16 h-16 backdrop-blur-xl rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl group-hover:shadow-3xl relative overflow-hidden border"
                    style={{
                      background: `linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)`,
                      border: `1px solid rgba(255,255,255,0.3)`,
                      boxShadow: `
                        0 8px 32px rgba(0,0,0,0.2),
                        inset 0 1px 0 rgba(255,255,255,0.3),
                        inset 0 -1px 0 rgba(255,255,255,0.1)
                      `,
                      borderRadius: "16px",
                    }}
                  >
                    {/* Glass highlight effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50"
                      style={{ borderRadius: "16px" }}
                    ></div>
                    {/* Animated shimmer */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"
                      style={{ borderRadius: "16px" }}
                    ></div>
                    <span
                      className={`${stat.iconColor} relative z-10 drop-shadow-lg`}
                    >
                      {stat.icon}
                    </span>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold mb-1 text-white drop-shadow-lg">
                    {stat.number}
                  </div>
                  <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-1 rounded-full text-sm font-semibold mt-6 shadow-lg backdrop-blur-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
            {/* Donation Type Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Select Donation Type
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    donationType === "one-time"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                      : "border-slate-200 dark:border-slate-600 hover:border-emerald-200 dark:hover:border-emerald-700 dark:text-slate-300"
                  }`}
                >
                  <CreditCard className="w-6 h-6 mb-2" />
                  <span className="font-medium">One-time Donation</span>
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    donationType === "monthly"
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                      : "border-slate-200 dark:border-slate-600 hover:border-emerald-200 dark:hover:border-emerald-700 dark:text-slate-300"
                  }`}
                >
                  <Banknote className="w-6 h-6 mb-2" />
                  <span className="font-medium">Monthly Donation</span>
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                Select Amount
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {donationOptions.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => {
                      setSelectedAmount(option.amount.toString());
                      setCustomAmount("");
                    }}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedAmount === option.amount.toString()
                        ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                        : "border-slate-200 dark:border-slate-600 hover:border-emerald-200 dark:hover:border-emerald-700"
                    }`}
                  >
                    <div className="text-emerald-600 dark:text-emerald-400 mb-2">{option.icon}</div>
                    <div className="font-bold text-lg text-slate-900 dark:text-white">₹{option.amount}</div>
                    <div className="text-sm text-slate-700 dark:text-slate-300 mt-1">
                      {option.description}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mt-4">
                <label
                  htmlFor="customAmount"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
                    ₹
                  </span>
                  <input
                    type="number"
                    id="customAmount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount("");
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-600 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 text-slate-900 dark:text-white dark:bg-slate-800 dark:placeholder-slate-400"
                  />
                </div>
              </div>
            </div>

            {/* Donation Button */}
            <button
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount}
              className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                !selectedAmount && !customAmount
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {donationType === "one-time"
                ? "Donate Now"
                : "Start Monthly Donation"}
            </button>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center space-x-4 text-slate-500 dark:text-slate-400">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="text-sm">Tax Deductible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-white">Your Impact</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See how your contribution makes a difference in the lives of those
              we serve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Education",
                description:
                  "Supporting quality education for underprivileged children",
                impact: "1000+ Students",
              },
              {
                title: "Healthcare",
                description:
                  "Providing essential healthcare services to communities",
                impact: "5000+ Beneficiaries",
              },
              {
                title: "Community Development",
                description:
                  "Building sustainable communities through various initiatives",
                impact: "50+ Villages",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30 hover:border-emerald-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-300 mb-6">{item.description}</p>
                <div className="text-emerald-400 font-semibold">
                  {item.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
