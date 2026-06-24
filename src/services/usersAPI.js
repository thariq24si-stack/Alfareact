import axios from "axios";

const API_URL =
"https://thovtkpegkfysnzgqxgx.supabase.co/rest/v1/users";

const API_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRob3Z0a3BlZ2tmeXNuemdxeGd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIzMDI0NTEsImV4cCI6MjA5Nzg3ODQ1MX0.r7HMxm9cBP-PYHhUINoCJJlW2ALccSpUsjGQq0mK7mg";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export const usersAPI = {

  async getUsers() {
    const response = await axios.get(API_URL,{
      headers,
    });
    return response.data;
  },

  async createUser(data) {
    const response = await axios.post(
      API_URL,
      data,
      { headers }
    );
    return response.data;
  },

  async updateUser(id,data) {
    await axios.patch(
      `${API_URL}?id=eq.${id}`,
      data,
      { headers }
    );
  },

  async deleteUser(id) {
    await axios.delete(
      `${API_URL}?id=eq.${id}`,
      { headers }
    );
  },

  async login(email,password){
    const response = await axios.get(
      `${API_URL}?email=eq.${email}&password=eq.${password}`,
      { headers }
    );

    return response.data;
  }
};