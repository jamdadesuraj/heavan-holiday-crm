import { NextFunction, Request, Response } from 'express';
import { B2C } from './b2cModel';
import { B2CValidation } from './b2cValidation';
import { appError } from '../../errors/appError';
import mongoose from 'mongoose';

export const createB2C = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      email,
      phone,
      salutation,
      firstName,
      lastName,
      leadSource,
      leadStage,
    } = req.body;

    // Zod validation
    const validatedData = B2CValidation.parse({
      email,
      phone,
      salutation,
      firstName,
      lastName,
      leadSource,
      leadStage,
    });

    const lead = new B2C(validatedData);
    await lead.save();

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'B2C lead created successfully',
      data: lead,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const getAllB2C = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const leads = await B2C.find({ isDeleted: false });

    if (leads.length === 0) {
      res.json({
        success: true,
        statusCode: 200,
        message: 'No leads found',
        data: [],
      });
      return;
    }

    res.json({
      success: true,
      statusCode: 200,
      message: 'B2C leads retrieved successfully',
      data: leads,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteB2CById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      next(new appError('Invalid ID format', 400));
      return;
    }

    // Soft delete
    const lead = await B2C.findOneAndUpdate(
      { _id: req.params.id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );

    if (!lead) {
      next(new appError('B2C lead not found', 404));
      return;
    }

    res.json({
      success: true,
      statusCode: 200,
      message: 'B2C lead deleted successfully',
      data: lead,
    });
    return;
  } catch (error) {
    next(error);
  }
};
