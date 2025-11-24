import api from './api';

export const eventService = {
  // Get all events
  getAll: async () => {
    const response = await api.get('/events');
    return response.data;
  },

  // Get event by ID
  getById: async (id) => {
    const response = await api.get(`/events/${id}`);
    return response.data;
  },

  // Create event
  create: async (data) => {
    const response = await api.post('/events', data);
    return response.data;
  },

  // Update event
  update: async (id, data) => {
    const response = await api.put(`/events/${id}`, data);
    return response.data;
  },

  // Delete event
  delete: async (id) => {
    await api.delete(`/events/${id}`);
  },
};
