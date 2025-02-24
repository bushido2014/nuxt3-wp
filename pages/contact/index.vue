<script setup lang="ts">
import { ref } from 'vue';
import type { FormError, FormSubmitEvent } from '#ui/types';

import { z } from 'zod';
const FORMSPARK_ACTION_URL = 'https://submit-form.com/B0jyp0TlO';

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(5, 'Name must be at least 5 characters long'),
  message: z
    .string()
    .min(10, 'Message must be between 10 and 500 characters long'),
});
type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  name: undefined,
  message: undefined,
});

const toast = useToast();

const { data, error } = useFetch(FORMSPARK_ACTION_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Required' });
  if (!state.name) errors.push({ path: 'name', message: 'Required' });
  if (!state.message) errors.push({ path: 'message', message: 'Required' });
  return errors;
};

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    // Validate form data
    const errors = validate(state);

    if (errors.length > 0) {
      console.error('Form validation errors:', errors);
      return;
    }

    const response = await fetch(FORMSPARK_ACTION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        message: state.message,
      }),
    });

    if (response.ok) {
      toast.add({
        title: 'Message sent successfully',
        description: 'I will get back to you as soon as possible',
        timeout: 2500,
      });
      state.name = '';
      state.email = '';
      state.message = '';
    } else {
      console.error('Failed to submit form');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
}

useHead({
  title: 'Contact Page',
  meta: [
    {
      name: 'description',
      content:
        'Viorel Soltan - Full-Stack Developer specializing in professional website development',
    },
  ],
});
</script>

<template>
  <div class="container py-8 relative">
    <div class="border-b border-slate-400 space-y-6 pb-8">
      <p>
        I am a Front-End Developer with over 5 years of experience in building modern, 
        high-performance web applications. My expertise spans various fields, 
        and I am always eager to take on new challenges in the ever-evolving world of technology.
        With a keen eye for detail and a strong commitment to writing clean, high-quality code, 
        I strive to deliver outstanding digital experiences
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 py-12">
      <div>
        <ul class="contact-info">
          <li>
            <a href="mailto:joomjoom2011@gmail.com"
              ><span
                ><Icon
                  name="ic:baseline-email"
                  size="28"
                  class="contact-icon" /></span
              ><span> joomjoom2011@gmail.com </span></a
            >
          </li>
          <li>
            <a href="https://telegram.me/bushido2018">
              <span
                ><Icon
                  name="fa-regular:paper-plane"
                  size="28"
                  class="contact-icon"
              /></span>
              <span>bushido2018</span></a
            >
          </li>
          <li>
            <span></span>

            <a href="https://github.com/bushido2014">
              <span
                ><Icon name="pajamas:github" size="28" class="contact-icon"
              /></span>
              <span> bushido2014 </span>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <UForm
          :schema="schema"
          :validate="validate"
          :state="state"
          @submit="onSubmit"
          class="relative space-y-4"
        >
          <UFormGroup label="Name" name="name" required>
            <UInput v-model="state.name" type="text" size="xl" />
          </UFormGroup>

          <UFormGroup label="Email" name="email" required>
            <UInput v-model="state.email" size="xl" />
          </UFormGroup>

          <UFormGroup label="Message" name="message" required>
            <UTextarea v-model="state.message" size="xl" />
          </UFormGroup>

          <UButton type="submit" size="xl"> Submit </UButton>
        </UForm>
        <UNotifications />
      </div>
    </div>
  </div>
</template>
<style scoped>
.contact-info {
  @apply list-none text-lg;
}
.contact-icon {
  @apply mr-4 text-slate-600;
}
</style>
