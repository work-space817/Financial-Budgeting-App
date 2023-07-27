﻿using AutoMapper;
using Data.LohikaBackend;
using Data.LohikaBackend.Entities;
using Data.LohikaBackend.Entities.Identity;
using LohikaBackend.Constants;
using LohikaBackend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LohikaBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class FeedbacksController : ControllerBase
    {
        private readonly AppEFContext _context;
        private readonly UserManager<AppUser> _userManager;
        private readonly IMapper _mapper;
        public FeedbacksController(AppEFContext context,
            UserManager<AppUser> userManager,
           IMapper mapper)
        {
            //Thread.Sleep(2000);
            _context = context;
            _mapper = mapper;
            _userManager = userManager;
        }

        //[HttpGet]
        //[Route("status/list")]
        //public async Task<IActionResult> StatusList()
        //{
        //    try
        //    {
        //        //Thread.Sleep(2000);
        //        var model = await _context.OrderStatuses
        //            .Select(x => _mapper.Map<OrderStatusItemViewModel>(x))
        //            .ToListAsync();
        //        return Ok(model);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(new
        //        {
        //            invalid = ex.Message
        //        });
        //    }
        //}

        [HttpPost]
        [AllowAnonymous]
        [Route("add")]
        public async Task<IActionResult> Add([FromBody]FeedbackAddViewModel model)
        {
            try
            {
                var entity = _mapper.Map<FeedbackEntity>(model);
                _context.Feedbacks.Add(entity);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }
        }

        [HttpGet]
        [Route("list")]
        //[Authorize(Roles = Roles.Admin)]
        public async Task<IActionResult> List()
        {
            try
            {
                //Thread.Sleep(2000);
                var model = await _context.Feedbacks
                    .OrderByDescending(x => x.DateCreated)
                    .Select(x => _mapper.Map<FeedbackItemViewModel>(x))
                    .ToListAsync();
                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    invalid = ex.Message
                });
            }
        }

        //[HttpPost]
        //[Route("status/change")]
        //[Authorize(Roles = Roles.Admin)]
        //public async Task<IActionResult> ChangeStatus([FromBody] OrderChangeStatusViewModel model)
        //{
        //    try
        //    {
        //        //Thread.Sleep(2000);
        //        var order = await _context.Orders.SingleOrDefaultAsync(x => x.Id == model.Id);
        //        order.StatusId = model.StatusId;
        //        _context.SaveChanges();
        //        return Ok();
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(new
        //        {
        //            invalid = ex.Message
        //        });
        //    }
        //}

        //[HttpGet]
        //[Route("user/list")]
        //public async Task<IActionResult> UserList()
        //{
        //    try
        //    {
        //        string userName = User.Claims.FirstOrDefault().Value;
        //        var user = await _userManager.FindByEmailAsync(userName);
        //        //Thread.Sleep(2000);
        //        var model = await _context.Orders
        //            .Include(x => x.OrderItems).ThenInclude(x => x.Product).ThenInclude(x => x.ProductImages)
        //            .Include(x => x.OrderStatus)
        //            .Where(x=>x.UserId==user.Id)
        //            .OrderByDescending(x => x.DateCreated)
        //            .Select(x => _mapper.Map<OrderViewModel>(x))
        //            .ToListAsync();
        //        return Ok(model);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(new
        //        {
        //            invalid = ex.Message
        //        });
        //    }
        //}
    }
}
