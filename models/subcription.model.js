import mongoose from 'mongoose';

const subcriptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Subcription name is required'],
      trim: true,
      minLength: 2,
      maxLength: 100,
    },
    price: {
      type: Number,
      require: [true, 'Subcription price is required'],
      min: [0, 'Price must be greater than 0'],
    },
    currency: {
      type: String,
      enum: ['USD', 'EUR', 'VND'],
      default: 'USD',
    },
    frequency: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
      type: String,
      enum: [
        'sports',
        'news',
        'entertainment',
        'lifestyle',
        'technology',
        'finance',
        'politics',
        'other',
      ],
      require: true,
    },
    paymentMethod: {
      type: String,
      require: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'cancel', 'expired'],
      default: 'active',
    },
    startDate: {
      type: Date,
      require: true,
      validate: {
        validator: (value) => value <= new Date(),
        message: 'Start date must be in the past',
      },
    },
    renewalDate: {
      type: Date,
      validate: {
        validator: (value) => value > this.startDate,
        message: 'Renewal date must be after the start date',
      },
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
      index: true,
    },
  },
  { timestamps: true },
);

// Auto-calculate renewalDate if missing
subcriptionSchema.pre('save', (next) => {
  if (!this.renewalDate) {
    const renewalPeriods = {
      daily: 1,
      weekly: 7,
      monthly: 30,
      yearly: 365,
    };

    this.renewalDate = new Date(this.startDate);
    this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]);

    // Auto-update the status if renewalDate has passed
    if (this.renewalDate < new Date()) {
      this.status = 'expired';
    }

    next();
  }
});

const Subcription = mongoose.model('Subcription', subcriptionSchema);
export default Subcription;
