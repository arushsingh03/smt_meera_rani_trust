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
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

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
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-300 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-emerald-100 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
              💖 Make a Difference
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
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Donation Type Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Select Donation Type
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    donationType === "one-time"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 hover:border-emerald-200"
                  }`}
                >
                  <CreditCard className="w-6 h-6 mb-2" />
                  <span className="font-medium">One-time Donation</span>
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    donationType === "monthly"
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 hover:border-emerald-200"
                  }`}
                >
                  <Banknote className="w-6 h-6 mb-2" />
                  <span className="font-medium">Monthly Donation</span>
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
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
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-slate-200 hover:border-emerald-200"
                    }`}
                  >
                    <div className="text-emerald-600 mb-2">{option.icon}</div>
                    <div className="font-bold text-lg">₹{option.amount}</div>
                    <div className="text-sm text-slate-600 mt-1">
                      {option.description}
                    </div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mt-4">
                <label
                  htmlFor="customAmount"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
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
                    className="w-full pl-8 pr-4 py-3 rounded-xl border-2 border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Donation Button */}
            <button
              onClick={handleDonate}
              disabled={!selectedAmount && !customAmount}
              className={`w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                (!selectedAmount && !customAmount) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {donationType === "one-time" ? "Donate Now" : "Start Monthly Donation"}
            </button>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center space-x-4 text-slate-500">
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
