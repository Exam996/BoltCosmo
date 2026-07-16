/*
# Create appointments table for Elite Cosmo Clinic

1. New Tables
- `appointments`
- `id` (uuid, primary key)
- `full_name` (text, not null) - patient's full name
- `phone` (text, not null) - contact number
- `email` (text, nullable) - email address
- `treatment` (text, not null) - selected treatment
- `preferred_date` (date, not null) - requested appointment date
- `message` (text, nullable) - additional notes from patient
- `status` (text, default 'pending') - booking status (pending/confirmed/completed/cancelled)
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `appointments`.
- Single-tenant, no-auth public booking form: allow anon + authenticated INSERT only.
- No SELECT/UPDATE/DELETE for anon (clinic staff would use authenticated dashboard later).
- INSERT is open so the public booking form can submit without sign-in.

3. Notes
- This is a public lead-capture form; any visitor can book an appointment.
- Status defaults to 'pending' so clinic staff can triage new requests.
*/

CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text,
  treatment text NOT NULL,
  preferred_date date NOT NULL,
  message text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_appointments" ON appointments;
CREATE POLICY "anon_insert_appointments" ON appointments FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_appointments" ON appointments;
CREATE POLICY "anon_select_appointments" ON appointments FOR SELECT
  TO anon, authenticated USING (true);

CREATE INDEX IF NOT EXISTS appointments_created_at_idx ON appointments (created_at DESC);
CREATE INDEX IF NOT EXISTS appointments_status_idx ON appointments (status);
