"use client";

import { useSearchParams } from "next/navigation";
import { ArrowLeft, CreditCard, QrCode, Shield, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

function PaymentContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount") || "0";

  const paymentMethods = [
    {
      name: "Google Pay",
      icon: "/gpay.svg",
      action: () => window.open(`upi://pay?pa=YOUR_UPI_ID&pn=SMT_MEERA_RANI_TRUST&am=${amount}&cu=INR`, "_blank"),
      color: "white",
    },
    {
      name: "PhonePe",
      icon: "/phonepe.svg",
      action: () => window.open(`upi://pay?pa=YOUR_UPI_ID&pn=SMT_MEERA_RANI_TRUST&am=${amount}&cu=INR`, "_blank"),
      color: "white",
    },
    {
      name: "Paytm",
      icon: "/paytm.svg",
      action: () => window.open(`upi://pay?pa=YOUR_UPI_ID&pn=SMT_MEERA_RANI_TRUST&am=${amount}&cu=INR`, "_blank"),
      color: "white",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-x-10">
            <Link
              href="/donate"
              className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Donation</span>
            </Link>
            <div className="inline-flex items-center bg-gradient-to-r from-orange-500 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <CreditCard className="w-4 h-4 inline mr-2" />
              Secure Payment
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-200">
                Complete Your Donation
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-emerald-100">
              Choose your preferred payment method to complete your donation of ₹{amount}
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                {
                  number: "100%",
                  label: "Secure Payments",
                  icon: <Shield className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-white/25 via-white/10 to-white/5",
                  borderGradient: "from-white/40 via-white/20 to-white/10",
                },
                {
                  number: "3",
                  label: "Payment Options",
                  icon: <CreditCard className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-orange-400/25 via-orange-400/10 to-orange-400/5",
                  borderGradient: "from-orange-300/40 via-orange-300/20 to-orange-300/10",
                },
                {
                  number: "0%",
                  label: "Processing Fee",
                  icon: <Award className="w-6 h-6" />,
                  iconColor: "text-white",
                  glassGradient: "from-pink-400/25 via-pink-400/10 to-pink-400/5",
                  borderGradient: "from-pink-300/40 via-pink-300/20 to-pink-300/10",
                },
                {
                  number: "24/7",
                  label: "Support",
                  icon: <QrCode className="w-6 h-6" />,
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

      {/* Payment Methods Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UPI Payment Methods */}
            {paymentMethods.map((method, index) => (
              <button
                key={index}
                onClick={method.action}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      <Image
                        src={method.icon}
                        alt={method.name}
                        width={24}
                        height={24}
                        className="w-10 h-10"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900">
                      {method.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Click to open {method.name} and complete your payment
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="text-emerald-600 font-semibold">Pay Now →</span>
                  </div>
                </div>
              </button>
            ))}

            {/* QR Code Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg mb-6">
                  <QrCode className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Scan QR Code</h3>
                <div className="w-48 h-48 bg-slate-100 rounded-xl mb-4 flex items-center justify-center">
                  {/* Add your QR code image here */}
                  <QrCode className="w-32 h-32 text-slate-400" />
                </div>
                <p className="text-slate-600 text-center">
                  Scan this QR code with any UPI app to pay ₹{amount}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Secure Payment</h3>
              <p className="text-slate-300">Your payment is protected with bank-grade security</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant Confirmation</h3>
              <p className="text-slate-300">Receive immediate confirmation of your donation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-lg mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tax Deductible</h3>
              <p className="text-slate-300">Your donation is eligible for tax benefits</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function Payment() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
} 