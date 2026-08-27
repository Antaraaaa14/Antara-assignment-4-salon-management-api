const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://wfupevascnwjujjqkefy.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndmdXBldmFzY253anVqanFrZWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc4MDk2NTQsImV4cCI6MjEwMzM4NTY1NH0.PBhCvLgZvULP2yVbslM4jPlLtFTAH31eBPl6-dEiBDY';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

module.exports = supabase;