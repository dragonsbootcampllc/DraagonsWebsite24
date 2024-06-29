import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ApplyPricing = () => {
    const router = useRouter();
    const { program } = router.query;

    useEffect(() => {
        if (program) {
            // Use the program name as needed
            console.log(`Program selected: ${program}`);
        }
    }, [program]);

    return (
        <div>
            <h1>Application Page</h1>
            {program && <p>You are applying for: {program}</p>}
            {/* Additional application form details */}
        </div>
    );
};

export default ApplyPricing;
