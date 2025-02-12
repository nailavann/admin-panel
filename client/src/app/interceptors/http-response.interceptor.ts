import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError, tap, finalize} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoadingService} from "../services/loading.service";

@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar,
              private loadingService: LoadingService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (['POST', 'PUT', 'DELETE'].includes(req.method)) {
            this.snackBar.open(event.body.message, 'Tamam', {
              duration: 3000,
              panelClass: ['success-snackbar'],
              horizontalPosition: 'right',
              verticalPosition: 'top',
            });
          }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = error.error?.error?.message || 'Bilinmeyen bir hata oluştu!';

        this.snackBar.open(errorMessage, 'Kapat', {
          duration: 4000,
          panelClass: ['error-snackbar'],
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });

        return throwError(() => new Error(errorMessage));
      }),
      finalize(() => {
        this.loadingService.decrementRequest();
      })
    );
  }
}
