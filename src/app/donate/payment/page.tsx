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
          <div className="absolute top-20 left-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-300 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-x-10">
            <Link
              href="/donate"
              className="inline-flex items-center space-x-2 text-emerald-100 hover:text-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Donation</span>
            </Link>
            <div className="inline-block bg-white/20 backdrop-blur-sm text-emerald-100 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/30">
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
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/30">
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