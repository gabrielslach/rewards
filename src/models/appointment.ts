export default {
    name: 'appointments',
    alias: 'Appointment',
    schema: {
      userID: {
        type: String
      },
      timestamp: {
        type: Date
      },
      targetDate: {
        type: Date
      },
      isConfirmed: {
        type: Boolean
      }
    }
  }