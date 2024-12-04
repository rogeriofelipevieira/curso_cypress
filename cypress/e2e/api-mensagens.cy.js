describe('Api adopet', () =>{
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiMTRhYmFkNS1hYzVjLTQ1ZTYtYmFmNC05NzcxZjc0ODg3NjYiLCJhZG9wdGVyTmFtZSI6IlJvZ2VyaW8gZmVsaXBlIiwiaWF0IjoxNzMzMjM2MTE5LCJleHAiOjE3MzM0OTUzMTl9.CXYBmtSdcuIPp5307JufxNIA3HcI9KyRgbtdsjJ2ovM'

    it('Mensagem da API', () =>{
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/b14abad5-ac5c-45e6-baf4-9771f7488766',
            headers: { authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})