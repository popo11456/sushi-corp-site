console.log("Loaded");
const SUPABASE_URL = "https://hrinbkblrgphhbyetswh.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyaW5ia2JscmdwaGhieWV0c3doIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3OTg1NDEsImV4cCI6MjA5ODM3NDU0MX0.weKFMYZhXVUZ2Cimf0kHfl8dbo0zPzEmNPBEVD_AZRk";

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const errorBox = document.getElementById("error");

loginBtn.addEventListener("click", login);

async function login() {
    errorBox.style.display = "none";

    loginBtn.innerText = "Signing In...";

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailInput.value.trim(),
        password: passwordInput.value
    });

    loginBtn.innerText = "Sign In";

    if (error) {
        errorBox.style.display = "block";
        errorBox.innerText = error.message;
        return;
    }

    window.location.href = "dashboard.html";
}

function showError(message){

    errorBox.style.display="block";
    errorBox.innerText=message;

}