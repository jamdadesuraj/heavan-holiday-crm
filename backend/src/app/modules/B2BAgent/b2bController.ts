import { NextFunction, Request, Response } from 'express';
import { B2B } from './b2bModel';
import { B2BValidation } from './b2bValidation';
import { appError } from '../../errors/appError';
import mongoose from 'mongoose';

export const createB2B = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      company,
      email,
      salutation,
      firstName,
      lastName,
      phone,
      rm,
      leadSource,
      remarks,
      country,
      city,
      area,
      pin,
      address,
    } = req.body;

    const validatedData = B2BValidation.parse({
      company,
      email,
      salutation,
      firstName,
      lastName,
      phone,
      rm,
      leadSource,
      remarks,
      country,
      city,
      area,
      pin,
      address,
    });

    const lead = new B2B(validatedData);
    await lead.save();

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'B2B lead created successfully',
      data: lead,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const getAllB2B = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const leads = await B2B.find({ isDeleted: false });

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
      message: 'B2B leads retrieved successfully',
      data: leads,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteB2BById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      next(new appError('Invalid ID format', 400));
      return;
    }

    const lead = await B2B.findOneAndUpdate(
      { _id: req.params.id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );

    if (!lead) {
      next(new appError('B2B lead not found', 404));
      return;
    }

    res.json({
      success: true,
      statusCode: 200,
      message: 'B2B lead deleted successfully',
      data: lead,
    });
    return;
  } catch (error) {
    next(error);
  }
};
