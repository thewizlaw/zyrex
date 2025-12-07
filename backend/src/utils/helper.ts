export function cleanAIJson(text: string): string {
    return text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();
}

export function validatePageData(data: any): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!data.page_title) {
        errors.push("Missing 'page_title' field");
    }

    if (!data.sections || !Array.isArray(data.sections)) {
        errors.push("Missing or invalid 'sections' array");
    } else {
        data.sections.forEach((section: any, index: number) => {
            if (!section.type) {
                errors.push(`Section ${index}: Missing 'type' field`);
            }
        });
    }

    if (!data.header || typeof data.header !== 'object') {
        errors.push("Missing or invalid 'header' object");
    }

    if (!data.footer || typeof data.footer !== 'object') {
        errors.push("Missing or invalid 'footer' object");
    }

    return {
        valid: errors.length === 0,
        errors
    };
}

export function logGenerationSummary(json: any): void {
    console.log(`\n📊 Generated Content Summary:`);
    console.log(`   📄 Page: ${json.page_title}`);
    console.log(`   🎯 Type: ${json.page_type || 'standard'}`);
    console.log(`   🎨 Header: ${json.header?.logo || 'Untitled'} (${json.header?.menu?.length || 0} menu items)`);
    console.log(`   📦 Sections (${json.sections?.length || 0}):`);
    json.sections?.forEach((s: any, i: number) => {
        const itemCount = s.items?.length || 0;
        console.log(`      ${i + 1}. ${s.type}${itemCount > 0 ? ` (${itemCount} items)` : ''}`);
    });
    console.log(`   👣 Footer: ${json.footer?.sections?.length || 0} columns, ${json.footer?.social?.length || 0} social, ${json.footer?.payment_methods?.length || 0} payment methods`);
    console.log(`   🎨 Styles: ${json.styles?.primary_color || 'default'} primary, ${json.styles?.dark_mode ? 'dark' : 'light'} mode\n`);
}