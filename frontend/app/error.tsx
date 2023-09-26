'use client'; // Error components must be Client Components

import Button from '@/components/button';
import ErrorSvg from '@/components/svg/errorSvg';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  const mediumScreen = useMediaQuery('(min-width:768px)');

  return (
    <div className="h-screen mx-xs flex xs:flex-col md:flex-row md:gap-20 xs:gap-8 justify-center items-center">
      <ErrorSvg className="" />
      <div>
        <h1 className="md:text-desktop-display xs:text-mobile-display font-bold text-sys-light-primary">
          404
        </h1>
        <h1 className="md:text-desktop-headline xs:text-mobile-headline font-bold mb-4">
          Page not found
        </h1>
        <p className="md:text-desktop-body xs:text-mobile-body mb-2">
          The requested URL /blog was not found on this server
        </p>
        <Button
          onClick={() => reset()}
          buttonStyle="filled"
          label="REFRESH THE PAGE"
          size={mediumScreen ? `lg` : 'full'}
          withIcon={true}
          icon={<RefreshRoundedIcon />}
        />
      </div>
    </div>
  );
}
