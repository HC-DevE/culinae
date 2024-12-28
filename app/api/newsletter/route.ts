import { NextRequest, NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY || '',
  apiSecret: process.env.MAILJET_SECRET_KEY || ''
});

export async function POST(req: NextRequest) {
  try {
    // Utiliser la nouvelle API de Next.js pour parser le body
    const body = await req.json();
    const { email } = body;
    
    console.log({emailIndludes: !email.includes('@')});
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }


    const contactData = await mailjet
      .post('contact', {'version': 'v3'})
      .request({
        IsExcludedFromCampaigns: false,
        Name: email.split('@')[0],
        Email: email,
        // Properties: {
        //   'source': 'website',
        //   'signup_date': new Date().toISOString()
        // }
      });

      console.log({contactData: contactData});

    if (contactData.response.status === 201) {
      await mailjet
        .post('send', { version: 'v3.1' })
        .request({
          Messages: [
            {
              From: {
                Email: "contact@culinae.fr",
                Name: "Culinae"
              },
              To: [
                {
                  Email: email,
                  Name: email.split('@')[0]
                }
              ],
              Subject: "Bienvenue chez Culinae !",
              TextPart: "Bienvenue dans la communauté Culinae !",
              HTMLPart: `
                <h3>Bienvenue chez Culinae !</h3>
                <p>Nous sommes ravis de vous compter parmi notre communauté de passionnés de cuisine.</p>
                <p>Vous recevrez bientôt nos meilleures recettes et conseils culinaires.</p>
                <p>À très bientôt !</p>
                <p>L'équipe Culinae</p>
              `
            }
          ]
        });

      return NextResponse.json(
        { message: 'Inscription réussie ! Consultez votre boîte mail pour confirmer votre inscription.' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: 'Vous êtes déjà inscrit à notre newsletter' },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error('Newsletter subscription error:', error);

    return NextResponse.json(
      {error: error.response.data.ErrorMessage},
      {status: error.response.data.StatusCode}
    )
    
    // if (error.statusCode === 400) {
    //   return NextResponse.json(
    //     { error: 'Adresse email invalide' },
    //     { status: 400 }
    //   );
    // }

    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'inscription' },
      { status: 500 }
    );
  }
}

// Configuration pour éviter la génération statique
export const dynamic = 'force-dynamic';
