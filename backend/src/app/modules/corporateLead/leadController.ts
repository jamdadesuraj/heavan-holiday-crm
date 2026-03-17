import { NextFunction, Request, Response } from 'express';
import { CorporateLeadValidation } from './leadValidation';
import { CorporateLead } from './leadModel';
import { appError } from '../../errors/appError';
import mongoose from 'mongoose';

export const createCorporateLead = async (
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
      country,
      city,
      area,
      pin,
      address,
      remarks,
    } = req.body;

    const validatedData = CorporateLeadValidation.parse({
      company,
      email,
      salutation,
      firstName,
      lastName,
      phone,
      rm,
      leadSource,
      country,
      city,
      area,
      pin,
      address,
      remarks,
    });

    const lead = new CorporateLead(validatedData);
    await lead.save();

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: 'Corporate lead created successfully',
      data: lead,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const getAllCorporateLeads = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const leads = await CorporateLead.find({ isDeleted: false });

    if (leads.length === 0) {
      res.json({
        success: true,
        statusCode: 200,
        message: 'No corporate leads found',
        data: [],
      });
      return;
    }

    res.json({
      success: true,
      statusCode: 200,
      message: 'Corporate leads retrieved successfully',
      data: leads,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteCorporateLeadById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      next(new appError('Invalid ID format', 400));
      return;
    }

    const lead = await CorporateLead.findOneAndUpdate(
      { _id: req.params.id, isDeleted: false },
      { isDeleted: true },
      { new: true },
    );

    if (!lead) {
      next(new appError('Corporate lead not found', 404));
      return;
    }

    res.json({
      success: true,
      statusCode: 200,
      message: 'Corporate lead deleted successfully',
      data: lead,
    });
    return;
  } catch (error) {
    next(error);
  }
};
