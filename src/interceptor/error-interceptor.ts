import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    // constructor(private toastr: ToastrService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('passou');
        return next.handle(req).pipe(
            catchError(err => {

                let errorObj = err;
                if(errorObj.err){
                    errorObj = errorObj.err;
                }
                if(!errorObj.status){
                    errorObj = JSON.parse(errorObj);
                }

                // console.error(err.message);
                console.log('Erro do interceptor');
                console.log(errorObj);
               
                // For newer versions of RxJS (6+), use this:
                return throwError(errorObj);
            }) as any
        )

    }
}

// export const ErrorInterceptorProvider = {
//     provide: HTTP_INTERCEPTORS,
//     useClass: ErrorInterceptor,
//     multi: true,

// };

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ];
