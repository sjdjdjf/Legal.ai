import jsPDF from 'jspdf';
import { Certificate } from '../types/education';

export class CertificateGenerator {
  static async generatePDF(certificate: Certificate, userName: string): Promise<string> {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    // Set up the certificate design
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    
    // Background and border
    doc.setFillColor(248, 249, 250); // Light gray background
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    
    // Border
    doc.setDrawColor(26, 42, 108); // Navy color
    doc.setLineWidth(2);
    doc.rect(10, 10, pageWidth - 20, pageHeight - 20);
    
    // Inner border
    doc.setLineWidth(0.5);
    doc.rect(15, 15, pageWidth - 30, pageHeight - 30);
    
    // Header
    doc.setFontSize(32);
    doc.setTextColor(26, 42, 108); // Navy
    doc.setFont('helvetica', 'bold');
    doc.text('CERTIFICATE OF COMPLETION', pageWidth / 2, 40, { align: 'center' });
    
    // Legal.ai branding
    doc.setFontSize(16);
    doc.setTextColor(212, 175, 55); // Gold
    doc.text('Legal.ai Professional Education Platform', pageWidth / 2, 50, { align: 'center' });
    
    // Main content
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    doc.text('This is to certify that', pageWidth / 2, 70, { align: 'center' });
    
    // Student name
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(26, 42, 108);
    doc.text(userName, pageWidth / 2, 85, { align: 'center' });
    
    // Course completion text
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text('has successfully completed the course', pageWidth / 2, 100, { align: 'center' });
    
    // Course title
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(26, 42, 108);
    const courseTitle = certificate.course?.title || 'Legal Course';
    doc.text(courseTitle, pageWidth / 2, 115, { align: 'center' });
    
    // Completion date
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    const completionDate = new Date(certificate.issued_at).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    doc.text(`Completed on ${completionDate}`, pageWidth / 2, 135, { align: 'center' });
    
    // Signature section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    
    // Left signature (Director)
    doc.text('_________________________', 60, 165, { align: 'center' });
    doc.text('Director of Education', 60, 172, { align: 'center' });
    doc.text('Legal.ai Platform', 60, 178, { align: 'center' });
    
    // Right signature (CEO)
    doc.text('_________________________', pageWidth - 60, 165, { align: 'center' });
    doc.text('Chief Executive Officer', pageWidth - 60, 172, { align: 'center' });
    doc.text('Legal.ai', pageWidth - 60, 178, { align: 'center' });
    
    // Certificate ID
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text(`Certificate ID: ${certificate.id}`, pageWidth / 2, pageHeight - 15, { align: 'center' });
    
    // Footer
    doc.setFontSize(10);
    doc.text('This certificate verifies completion of professional legal education requirements', pageWidth / 2, pageHeight - 10, { align: 'center' });
    
    // Convert to blob URL
    const pdfBlob = doc.output('blob');
    return URL.createObjectURL(pdfBlob);
  }

  static downloadCertificate(certificate: Certificate, userName: string, pdfUrl: string): void {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `Legal.ai_Certificate_${certificate.course?.title?.replace(/\s+/g, '_')}_${userName.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}