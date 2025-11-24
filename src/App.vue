<script setup lang="ts">
import { ref, reactive } from 'vue'

interface FormData {
  name: string
  email: string
  phone: string
  serviceType: string
  description: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  description: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  console.log('Form submitted:', formData)
  submitted.value = true

  setTimeout(() => {
    submitted.value = false
    formData.name = ''
    formData.email = ''
    formData.phone = ''
    formData.serviceType = ''
    formData.description = ''
  }, 3000)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
          Request a Service,
          <span class="text-emerald-600">Simplified</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-600 mb-16 max-w-2xl mx-auto">
          Submit your order request in minutes. Professional service delivery
          with transparent communication every step of the way.
        </p>

        <!-- Features -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                class="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Fast Response
            </h3>
            <p class="text-slate-600">
              Get a response to your service request within 24 hours
            </p>
          </div>

          <div class="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                class="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Verified Professionals
            </h3>
            <p class="text-slate-600">
              Work with certified and experienced service providers
            </p>
          </div>

          <div class="p-6 rounded-xl bg-white shadow-sm border border-slate-200">
            <div class="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                class="w-6 h-6 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-900 mb-2">
              Transparent Pricing
            </h3>
            <p class="text-slate-600">
              Clear quotes with no hidden fees or surprise charges
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Request Form Section -->
    <section id="request-form" class="container mx-auto px-4 pb-20">
      <div class="max-w-2xl mx-auto">
        <div class="rounded-2xl border-2 bg-white text-slate-900 shadow-xl hover:shadow-2xl transition-shadow duration-200">
          <div class="flex flex-col space-y-1.5 p-6 text-center pb-8">
            <div class="text-3xl font-bold text-slate-900">
              Submit Your Request
            </div>
            <div class="text-lg text-slate-600">
              Fill out the form below and we'll get back to you shortly
            </div>
          </div>
          <div class="p-6 pt-0">
            <!-- Success Message -->
            <div v-if="submitted" class="text-center py-12">
              <div class="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-semibold text-slate-900 mb-2">
                Request Submitted!
              </h3>
              <p class="text-slate-600">
                We've received your request and will contact you soon.
              </p>
            </div>

            <!-- Form -->
            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <label
                  for="name"
                  class="text-sm font-semibold leading-none text-slate-700"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  placeholder="John Doe"
                  required
                  class="flex h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-base shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50 hover:border-emerald-300"
                >
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label
                    for="email"
                    class="text-sm font-semibold leading-none text-slate-700"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    v-model="formData.email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    class="flex h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-base shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50 hover:border-emerald-300"
                  >
                </div>

                <div class="space-y-2">
                  <label
                    for="phone"
                    class="text-sm font-semibold leading-none text-slate-700"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    v-model="formData.phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    class="flex h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-base shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50 hover:border-emerald-300"
                  >
                </div>
              </div>

              <div class="space-y-2">
                <label
                  for="serviceType"
                  class="text-sm font-semibold leading-none text-slate-700"
                >
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  v-model="formData.serviceType"
                  required
                  class="flex h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-base shadow-sm transition-all duration-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50 hover:border-emerald-300"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="consulting">Consulting</option>
                  <option value="design">Design & Creative</option>
                  <option value="development">Development</option>
                  <option value="maintenance">Maintenance & Support</option>
                  <option value="installation">Installation</option>
                  <option value="repair">Repair Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="space-y-2">
                <label
                  for="description"
                  class="text-sm font-semibold leading-none text-slate-700"
                >
                  Project Description *
                </label>
                <textarea
                  id="description"
                  v-model="formData.description"
                  placeholder="Tell us about your project and what you need help with..."
                  required
                  rows="5"
                  class="flex min-h-32 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-3 text-base shadow-sm transition-all duration-200 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50 hover:border-emerald-300 resize-y"
                />
              </div>

              <button
                type="submit"
                class="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-200 bg-white">
      <div class="container mx-auto px-4 py-8">
        <p class="text-center text-slate-600">
          © 2025 Service Request. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
