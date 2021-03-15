import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class ToastInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone();

    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let errorMessage = '';
        let title = '';

        if (err.error instanceof ErrorEvent){
          title = "Client: Error"
          errorMessage= err.error.message
        } else {
          title = `Server: Error Code: ${err.status}`
          errorMessage = err.message
        }

        this.toastr.error(errorMessage, title)
        return throwError(errorMessage)
      })
    )
  }

}
