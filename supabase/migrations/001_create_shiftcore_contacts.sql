create table if not exists public.shiftcore_contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  subject text not null,
  message text not null,
  status text not null default 'new',
  source text not null default 'shiftcore_contact_page',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists shiftcore_contacts_created_at_idx
  on public.shiftcore_contacts (created_at desc);

create index if not exists shiftcore_contacts_status_idx
  on public.shiftcore_contacts (status);

alter table public.shiftcore_contacts enable row level security;
