using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class PaymentController : ControllerBase
{

    TheaterDbContext _context;

    public PaymentController(TheaterDbContext context)
        {
            _context = context;
        }

    [HttpPost]
    [Route("paymentsucces")]
    [Consumes("application/x-www-form-urlencoded")]
    public async Task<ActionResult<paymentFromApi>> paymentSucces([FromForm] paymentFromApi paymentFromApi)
    {

        _context.Payment.Where(x => x.Id == paymentFromApi.reference).Any(y => y.succes == paymentFromApi.succes);
        await _context.SaveChangesAsync();
        Console.WriteLine("The payment with id: " + paymentFromApi.reference + " is: " + paymentFromApi.succes);
        return paymentFromApi;
    }

    [HttpPost]
    [Route("createpayment")]
    public async Task<ActionResult<Payment>> createPayment([FromBody] Payment payment)
    {

        await _context.Payment.AddAsync(payment);
        await _context.SaveChangesAsync();
        Console.WriteLine("The payment with id: " + payment.Id + " and amount: " + payment.Amount + " is created.");
        return payment;
    }

    public class paymentFromApi{

        public Boolean succes;
        
        public int reference;
    }
}
